import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const deniedEmails = ["name@example.com", "name@anything.com"];
  const deniedDomains = ["example.com", "anything.com"];

  const invalidEmails = (email) => {
    const domain = email.split("@")[1];
    return deniedEmails.includes(email) || deniedDomains.includes(domain);
  };

  const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const addEmailMessage = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces")
        .test(
          "not-placeholder",
          "Please enter a valid name",
          (value) =>
            !/^(anything name|Anything Name|unknown name|Unknown|hello there|hello name|Hello Name)$/i.test(
              value
            )
        )
        .min(11, "Name must be at least 10 characters")
        .required("Please enter your full name"),
      email: Yup.string()
        .email("Invalid email")
        .required("Please enter your email address")
        .test(
          "invalidEmails",
          "This email address is invalid",
          (value) => !invalidEmails(value)
        ),
      message: Yup.string().required("Please enter your email message"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const newEmails = {
          name: values.name,
          email: values.email,
          message: values.message,
        };

        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          newEmails,
          "IDs"
        );

        setSuccessMessage("Your message has been sent successfully. Thank you!");
        setShowAlert(true);
      } catch (error) {
        console.error(error);
      }
      resetForm();
    },
  });

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="contact" id="Contact">
      <Container>
        <h2 className="mb-4">Get in Touch</h2>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col md="8">
            {showAlert && successMessage && (
              <div
                className="status-message alert alert-success mb-4 rounded-5"
                style={{ width: "auto" }}
                data-aos="fade-right"
                role="alert"
              >
                {successMessage}
              </div>
            )}

            <Card
              className="rounded-4"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardBody>
                <Form onSubmit={addEmailMessage.handleSubmit}>
                  <FormGroup className="form-floating mt-4 mb-4 ms-2 me-2">
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      className="form-control rounded-4"
                      value={addEmailMessage.values.name}
                      onChange={addEmailMessage.handleChange}
                      onBlur={addEmailMessage.handleBlur}
                      invalid={
                        addEmailMessage.touched.name &&
                        Boolean(addEmailMessage.errors.name)
                      }
                    />
                    {addEmailMessage.touched.name &&
                    addEmailMessage.errors.name ? (
                      <div className="invalid-feedback">
                        {addEmailMessage.errors.name}
                      </div>
                    ) : null}
                    <Label htmlFor="floatingSelectGrid">Full Name</Label>
                  </FormGroup>

                  <FormGroup className="form-floating mb-4 ms-2 me-2 ">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      className="form-control rounded-4"
                      value={addEmailMessage.values.email}
                      onChange={addEmailMessage.handleChange}
                      onBlur={addEmailMessage.handleBlur}
                      invalid={
                        addEmailMessage.touched.email &&
                        Boolean(addEmailMessage.errors.email)
                      }
                    />
                    {addEmailMessage.touched.email &&
                    addEmailMessage.errors.email ? (
                      <div className="invalid-feedback">
                        {addEmailMessage.errors.email}
                      </div>
                    ) : null}

                    <Label htmlFor="floatingSelectGrid">Email address</Label>
                  </FormGroup>

                  <FormGroup className="form-floating mb-4 ms-2 me-2">
                    <Input
                      type="textarea"
                      id="message"
                      name="message"
                      placeholder="Leave a message here"
                      style={{ height: "300px" }}
                      className="form-control rounded-4"
                      value={addEmailMessage.values.message}
                      onChange={addEmailMessage.handleChange}
                      onBlur={addEmailMessage.handleBlur}
                      invalid={
                        addEmailMessage.touched.message &&
                        Boolean(addEmailMessage.errors.message)
                      }
                    />
                    {addEmailMessage.touched.message &&
                    addEmailMessage.errors.message ? (
                      <div className="invalid-feedback">
                        {addEmailMessage.errors.message}
                      </div>
                    ) : null}
                    <Label htmlFor="floatingSelectGrid">Your Message</Label>
                  </FormGroup>
                  <button type="submit" className="send-btn ms-2 mb-3 fw-bold">
                    Send Message
                  </button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
