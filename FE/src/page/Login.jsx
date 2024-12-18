import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}

from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'bootstrap';
function App() {

  const [justifyActive, setJustifyActive] = useState('tab1');;
  const [login, setLogin] = useState()
  const navigate = useNavigate();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const handleLogin = async () => {
    const email = document.getElementById('form1').value; 
    const password = document.getElementById('form2').value; 

    if (!email || !password) {
      alert("Vui lòng điền đầy đủ email và mật khẩu.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/admin/login", { email, password });
      if (res.status === 200) {
        setLogin(res.data);
        alert("Đăng nhập thành công!"); 
        setTimeout(() => {
          navigate('/products'); 
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        alert("Email hoặc mật khẩu không chính xác!");
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
      }
      console.log(error);
    }
  }
  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Đăng nhập
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Đăng kí
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <div className={`${justifyActive === 'tab1' ? 'd-flex': 'd-none'} flex-column`}>
       
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Nhớ tài khoản' />
            <a href="!#">Quên mật khẩu?</a>
          </div>
 
          <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Đăng nhập</MDBBtn>
          <p className="text-center">Bạn chưa có tài khoản? <a href="#!">Đăng kí</a></p>

        </div>

        <div className={`${justifyActive === 'tab2' ? 'd-flex': 'd-none'} flex-column`} >

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Tôi đã đọc và đồng ý với các điều khoản' />
          </div>

          <MDBBtn className="mb-4 w-100">Đăng nhập</MDBBtn>

        </div>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default App;