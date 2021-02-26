import {
  Row,
  Col,
  Form,
  Input,
  Label,
  Button,
  Portlet,
  Spinner,
  Container,
  FloatLabel,
  InputGroup,
  CustomInput
} from "@panely/components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm, Controller } from "react-hook-form"
import { pageChangeHeaderTitle, breadcrumbChange, currentBusinessChange } from "store/actions"
import { bindActionCreators } from "redux"
import { yupResolver } from "@hookform/resolvers"
import { connect } from "react-redux"
import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
import * as yup from "yup"
import withLayout from "components/layout/withLayout"
import swalContent from "sweetalert2-react-content"
import withAuth from "components/user/withAuth"
import Head from "next/head"
import Swal from "@panely/sweetalert2"
import businessMethod from "../../components/business/clientBusiness"
import Router from "next/router"
import PAGE from "config/page.config"

// Use SweetAlert React Content library
const ReactSwal = swalContent(Swal)

// Set SweetAlert options
const swal = ReactSwal.mixin({
  customClass: {
    confirmButton: "btn btn-label-success btn-wide mx-1",
    cancelButton: "btn btn-label-danger btn-wide mx-1"
  },
  buttonsStyling: false
})

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
                  <Portlet.Title>Por favor rellene los campos queridos para crear su empresa</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body >
                  {/* BEGIN Form */}
                  <BusinessForm props={this.props} />
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



function BusinessForm({props}) {
  // Loading state
  const [loading, setLoading] = React.useState(false)
  const [flagBusiness, setFlagBusiness] = React.useState(true)
  let {
    id, 
    nombreEmpresa, 
    clasifEmpresa, 
    tipoEmpresa, 
    fundador, 
    telefono, 
    emailEmpresa, 
    RNC,
  } = props.currentBusiness !== null ? props.currentBusiness: "";
  if (!props.currentBusiness){
    nombreEmpresa= "",
    clasifEmpresa= "default",
    tipoEmpresa= "default",
    fundador= "",
    telefono= "",
    emailEmpresa= "",
    RNC= "",
    setFlagBusiness(false)
  }

  // Define Yup schema for form validation
  const schema = yup.object().shape({
    nombreEmpresa: yup
      .string()
      .min(6, "Please enter at least 6 characters")
      .required("Please provide your business name"),
    clasifEmpresa: yup.string().notOneOf(["default"], "Please enter your classification business"),
    tipoEmpresa: yup.string().notOneOf(["default"], "Please enter your business type"),
    fundador: yup
      .string()
      .min(6, "Please enter at least 6 characters")
      .required("Please provide your business founder"),
    telefono: yup
      .string()
      .min(10, "Please enter at least 10 characters")
      .required("Please provide your business telephone"),
    emailEmpresa: yup
      .string()
      .email("Your email is not valid")
      .required("Please enter your email"),
    RNC: yup
      .string()
      .min(6, "Please enter at least 6 characters")
      .required("Please provide your RNC")
  })

  const { control, handleSubmit, errors } = useForm({
    // Apply Yup as resolver for react-hook-form
    resolver: yupResolver(schema),
    // Define the default values for all input forms
    defaultValues:{
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
    }
  })

  // Handle form submit event
  const onSubmit = ({ 
    nombreEmpresa,
    clasifEmpresa, 
    tipoEmpresa, 
    fundador, 
    telefono, 
    emailEmpresa,
    RNC }) => {
    // Show loading indicator
    setLoading(true)
    const convertProp = JSON.stringify(props)
    console.log(`Estas son las propiedades: ${convertProp}` )
    const { id, email } = props.user
    console.log(`Este es el email: ${email}` )

    // Trying login with user account
    businessMethod.createBusiness({props,
      nombreEmpresa,
      clasifEmpresa, 
      tipoEmpresa, 
      fundador, 
      telefono, 
      emailEmpresa, 
      RNC,
      usuarioIdAlta: id,
      emailUsuarioAlta: email,
      onSuccess: () => Router.push(PAGE.viewBusinessPagePath)
    })
    .then()
    .catch(err => {
      console.log(`Este es el error : ${err}`)

      // Show the error message if authentication is failed
      swal.fire({ text: err, icon: "error" })
    });

    // Hide loading indicator
    setLoading(false)
  }

  return(

    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* BEGIN Form Group */}
      <Form.Group>
        <FloatLabel>
          <Controller
            as={Input}
            type="text"
            id="nombreEmpresa"
            name="nombreEmpresa"
            size="lg"
            control={control}
            invalid={Boolean(errors.nombreEmpresa)}
            placeholder="Por favor inserte el nombre de su empresa"
          />
          <Label for="nombreEmpresa">Nombre de la empresa</Label>
          {errors.nombreEmpresa && <Form.Feedback children={errors.nombreEmpresa.message} />}
        </FloatLabel>
      </Form.Group>
      {/* BEGIN Form Group */}
      <Row form>
        <Col md="6">
          {/* BEGIN Form Group */}
          <Form.Group>
            <FloatLabel>
              <Controller
                as={Input}
                type="select"
                id="clasifEmpresa"
                name="clasifEmpresa"
                size="lg"
                disabled
                control={control}
                invalid={Boolean(errors.clasifEmpresa)}
              >
                <option value="default">Choose...</option>
                <option value="Industria de bienes no duraderos">Industria de bienes no duraderos</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Controller>
              <Label for="clasifEmpresa">Clasificación de la Empresa</Label>
              {errors.clasifEmpresa && <Form.Feedback children={errors.clasifEmpresa.message} />}
            </FloatLabel>
          </Form.Group>
          {/* BEGIN Form Group */}
        </Col>
        <Col md="6">
          {/* BEGIN Form Group */}
          <Form.Group>
            <FloatLabel>
              <Controller
                  as={Input}
                  type="select"
                  id="tipoEmpresa"
                  name="tipoEmpresa"
                  size="lg"
                  disabled
                  control={control}
                  invalid={Boolean(errors.tipoEmpresa)}
                >
                  <option value="default">Choose...</option>
                  <option value="Productos">Productos</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </Controller>
              <Label for="tipoEmpresa">Tipo de Empresa</Label>
              {errors.tipoEmpresa && <Form.Feedback children={errors.tipoEmpresa.message} />}
            </FloatLabel>
          </Form.Group>
          {/* BEGIN Form Group */}
        </Col>
      </Row>
      {/* BEGIN Form Group */}
      <Form.Group>
        <FloatLabel>
          <Controller
              as={Input}
              type="text"
              id="fundador"
              name="fundador"
              size="lg"
              disabled
              control={control}
              invalid={Boolean(errors.fundador)}
              placeholder="Por favor inserte el nombre del fundador de la empresa"
            />
            <Label for="fundador">Fundador de la empresa</Label>
            {errors.fundador && <Form.Feedback children={errors.fundador.message} />}
        </FloatLabel>
      </Form.Group>
      {/* BEGIN Form Group */}
      <Row form>
        <Col md="4">
          {/* BEGIN Form Group */}
          <Form.Group>
            <FloatLabel>
              <Controller
                as={Input}
                type="text"
                id="telefono"
                name="telefono"
                size="lg"
                disabled
                control={control}
                invalid={Boolean(errors.telefono)}
                placeholder="Por favor inserte el teléfono de la empresa"
              />
              <Label for="telefono">Teléfono de la empresa</Label>
              {errors.telefono && <Form.Feedback children={errors.telefono.message} />}
            </FloatLabel>
          </Form.Group>
          {/* BEGIN Form Group */}
        </Col>
        <Col md="4">
          {/* BEGIN Form Group */}
          <Form.Group>
            <FloatLabel>
              <Controller
                  as={Input}
                  type="email"
                  id="emailEmpresa"
                  name="emailEmpresa"
                  size="lg"
                  disabled
                  control={control}
                  invalid={Boolean(errors.emailEmpresa)}
                  placeholder="Por favor inserte el email de la empresa"
                />
                <Label for="emailEmpresa">Email de la empresa</Label>
                {errors.emailEmpresa && <Form.Feedback children={errors.emailEmpresa.message} />}
            </FloatLabel>
          </Form.Group>
          {/* BEGIN Form Group */}
        </Col>
        <Col md="4">
          {/* BEGIN Form Group */}
          <Form.Group>
            <FloatLabel>
              <Controller
                  as={Input}
                  type="text"
                  id="RNC"
                  name="RNC"
                  size="lg"
                  enabled
                  control={control}
                  invalid={Boolean(errors.RNC)}
                  placeholder="Por favor inserte el RNC de la empresa"
                />
                <Label for="RNC">RNC de la empresa</Label>
                {errors.RNC && <Form.Feedback children={errors.RNC.message} />}
            </FloatLabel>
          </Form.Group>
          {/* BEGIN Form Group */}
        </Col>
      </Row>
      <Button type="submit" variant="primary">
      {loading ? <Spinner className="mr-2" /> : null} Guardar
      </Button>
    </Form>
  )
}  

function mapStateToProps(state) {
  return {
    currentBusiness: state.currentBusiness
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ pageChangeHeaderTitle, breadcrumbChange, currentBusinessChange }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(withAuth(withLayout(CrearEmpresaPage)))
