import Input from "../Input/Input"
const Login=() => {
    return(
        <section className="login-wrapper">
            <form className="container">
                    <h1>Customer Login</h1>
                    <Input styleClass="green1" queTipoSoy='text' queDigo="Ingrese mail"/>
                    <Input  styleClass="red1" queTipoSoy='password' queDigo="Ingrese password"/>
                    
                    <button type="submit"></button>
            </form>
        </section>
    )

}
export default Login