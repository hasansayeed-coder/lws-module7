import Layout from '../src/components/Layout';
import Balance from "./components/Balance";
import Form from "./components/Form";
import Transactions from "./components/Transactions";

function App() {
    return (
        <Layout>
            <Balance></Balance>
            <Form></Form>
            <Transactions></Transactions>
        </Layout>
    );
}

export default App;
