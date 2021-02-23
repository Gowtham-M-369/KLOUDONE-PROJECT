import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
const genderOptions = [
    { key: 'G', text: 'Grape', value: 'Grape' },
    { key: 'l', text: 'lime', value: 'lime' },
    { key: 'o', text: 'orange', value: 'orange' },
  ]

// class Contact extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: []};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         this.setState({value: event.target.value});
//       }

// valuesArr: [{key:  n},{key:  n}, {key:  n}]
// 

 const FormExampleFieldControlId = () => (
   <div>
  <div style={{padding:"40px"}}>
  <Form onSubmit={(e, a, f)=>console.log(e)}>
  
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
        style={{width: "40%"}}
        // onChange={this.handleChange}
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Email'
        placeholder='Email'
        style={{width: "40%"}}
        // onChange={this.handleChange}
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Select Fruit', htmlFor: 'form-select-control-gender' }}
        placeholder='Select Fruit'
        style={{width: "40%"}}
        // onChange={this.handleChange}
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
        
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          placeholder='Message'
          style={{width: "40%"}}
        //   onChange={this.handleChange}
        />
    
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Sumbit'
          onClick={(e, data) => console.log(data)}
          />
  </Form>
</div>
</div>
)

export default FormExampleFieldControlId;

// class Myform extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             firstname:"",
//             lastname:"",
//             fruit:"",
//             msg:""
//         }
//     }
// 3
// render()
// {
//     return(
//         <form>
//             <p>Full Name:</p>  
//             <input type="text" value={this.setState.firstname} onChange={this.firstname}/>
//             <p>Email</p>
//             <input type="text" value={this.setState.lastname} onChange={this.lastname}/>
//             <p>Select fruit</p>
//             <select  onChange={this.fruit} defaultValue="select Fruit">
//                 <option defaultValue>select Fruit</option>
//                 <option Value>mango</option>
//                 <option Value>Apple</option>
//             </select>
//             <p>Message</p>
//             <input type="text" value={this.setState.msg} onChange={this.msg}/>
//             <br/>
//             <input type='submit'/>
//         </form>
//     );
// }
// }
// export default Myform;