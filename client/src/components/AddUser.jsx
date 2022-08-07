import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material';



const Container = styled(FormGroup)`
margin:5% auto 0 auto;
width:50%;
& > div{
    margin-top:20px;
}

`

const onValueChange=(e)=>{
    console.log(e.target.name,e.target.value);
}

const AddUser = () => {
    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)}name ="phone"/>
            </FormControl>
            <FormControl>
                <Button variant='contained'>Add user</Button>
            </FormControl>
        </Container>
    );

}

export default AddUser;