import {
  Row,
  Col,
  Form,
  Input,
  Label,
  Button,
  Portlet,
  Container,
  FloatLabel,
  InputGroup,
  CustomInput
} from "@panely/components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { pageChangeHeaderTitle, breadcrumbChange } from "store/actions"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
import withLayout from "components/layout/withLayout"
import withAuth from "components/firebase/withAuth"
import Head from "next/head"

class CrearEmpresaPage extends React.Component {
  componentDidMount() {
    // Set header title
    this.props.pageChangeHeaderTitle("Crear empresa")
    // Set breadcrumb data
    this.props.breadcrumbChange([
      { text: "Dashboard", link: "/" },
      { text: "Empresa" },
      { text: "Crear empresa", link: "/empresa/crear-empresa" }
    ])
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Crear empresa | Panely</title>
        </Head>
        <Container fluid>
          <Row>
            <Col md="12">
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Complex layout with floating label</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  {/* BEGIN Form */}
                  <Form>
                    <Row form>
                      <Col md="6">
                        {/* BEGIN Form Group */}
                        <Form.Group>
                          <FloatLabel>
                            <Input
                              type="email"
                              id="emailExample10"
                              placeholder="Insert your email"
                            />
                            <Label for="emailExample10">Email</Label>
                          </FloatLabel>
                        </Form.Group>
                        {/* BEGIN Form Group */}
                      </Col>
                      <Col md="6">
                        {/* BEGIN Form Group */}
                        <Form.Group>
                          <FloatLabel>
                            <Input
                              type="password"
                              id="passwordExample10"
                              placeholder="Insert your password"
                            />
                            <Label for="passwordExample10">Password</Label>
                          </FloatLabel>
                        </Form.Group>
                        {/* BEGIN Form Group */}
                      </Col>
                    </Row>
                    {/* BEGIN Form Group */}
                    <Form.Group>
                      <FloatLabel>
                        <Input type="text" id="address1Example10" placeholder="1234 Main St" />
                        <Label for="address1Example10">Address</Label>
                      </FloatLabel>
                    </Form.Group>
                    {/* BEGIN Form Group */}
                    {/* BEGIN Form Group */}
                    <Form.Group>
                      <FloatLabel>
                        <Input
                          type="text"
                          id="address2Example10"
                          placeholder="Apartment, studio, or floor"
                        />
                        <Label for="address2Example10">Address 2</Label>
                      </FloatLabel>
                    </Form.Group>
                    {/* BEGIN Form Group */}
                    <Row form>
                      <Col md="6">
                        {/* BEGIN Form Group */}
                        <Form.Group>
                          <FloatLabel>
                            <Input type="text" id="cityExample10" placeholder="Insert your city" />
                            <Label for="cityExample10">City</Label>
                          </FloatLabel>
                        </Form.Group>
                        {/* BEGIN Form Group */}
                      </Col>
                      <Col md="4">
                        {/* BEGIN Form Group */}
                        <Form.Group>
                          <FloatLabel>
                            <Input type="select" id="stateExample10">
                              <option value="">Choose...</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Input>
                            <Label for="stateExample10">State</Label>
                          </FloatLabel>
                        </Form.Group>
                        {/* BEGIN Form Group */}
                      </Col>
                      <Col md="2">
                        {/* BEGIN Form Group */}
                        <Form.Group>
                          <FloatLabel>
                            <Input type="text" id="zipExample10" placeholder="123456" />
                            <Label for="zipExample10">Zip</Label>
                          </FloatLabel>
                        </Form.Group>
                        {/* BEGIN Form Group */}
                      </Col>
                    </Row>
                    {/* BEGIN Form Group */}
                    <Form.Group>
                      <CustomInput type="checkbox" id="checkboxExample10" label="Check me out" />
                    </Form.Group>
                    {/* BEGIN Form Group */}
                    <Button type="submit" variant="primary">
                      Sign in
                    </Button>
                  </Form>
                  {/* END Form */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ pageChangeHeaderTitle, breadcrumbChange }, dispatch)
}

export default connect(null, mapDispathToProps)(withAuth(withLayout(CrearEmpresaPage)))
