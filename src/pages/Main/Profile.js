import React, { useState } from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import { SectionTitle } from '../../components/styles/Common/Section Title/SectionTilte.styled'
import { MainForm } from '../../components/styles/MainForm/MainFrom.styled'
import FormItem from "../../components/FormItem/FormItem"
import { Button } from '../../components/styles/Common/Buttons/Buttons.styled'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../features/User/userSlice'

function Profile() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
      <section className='profile-section content-section'>
          <Container>
                <SectionTitle>Profile</SectionTitle>
                 <MainForm onSubmit={handleSubmit}>
                     <Row>
                         <Col lg={4}>
                            <FormItem
                              type="text"
                              name="name"
                              value={userData.name}
                              placeholder="Enter your name"
                              label="Name"
                              handleChange={handleChange}
                            />
                         </Col>
                         <Col lg={4}>
                            <FormItem
                              type="text"
                              name="lastName"
                              value={userData.lastName}
                              placeholder="Enter your surname"
                              label="Surname"
                              handleChange={handleChange}
                            />
                         </Col>
                         <Col lg={4}>
                            <FormItem
                              type="eamil"
                              name="email"
                              value={userData.email}
                              placeholder="Enter your email"
                              label="Email"
                              handleChange={handleChange}
                            />
                         </Col>
                         <Col lg={4}>
                            <FormItem
                              type="text"
                              name="location"
                              value={userData.location}
                              placeholder="Your location"
                              label="Location"
                              handleChange={handleChange}
                            />
                         </Col>
                         <Col lg={4}>
                           <Button type='submit'>Save Changes</Button>
                         </Col>
                     </Row>
                 </MainForm>
          </Container>
      </section>
  )
}

export default Profile