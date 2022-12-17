import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import axios from "axios";
import { BASE_URL } from "../../../url";

let BASE_URL = "http://localhost:8080"

const LoginWrapper = styled.div`
  font-family: "Proxima Nova" .SignUpBtn {
    border-left: 1px solid #c7c7c7;
    border-radius: 0px;
  }
  .SignUpBtn:hover {
    background-color: transparent;
    color: #faa619;
  }
`;

const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ signupStatus, setSignupStatus ] = useState(false);

    const handleSubmit = async(e) => {
      e.prevent.default();
      if(password.length<8){
        alert("Please Fill Approriate Details");
      }
      const payload = {
        name, email, password
      }
      let response = await axios.post(`${BASE_URL}/signup`, payload);
      setSignupStatus(true);

      
    }


  };

  useEffect(() => {
    axios.post(`/signup`, (req, res) => {});
  }, []);

  return (
    <LoginWrapper>
      <Button
        onClick={onOpen}
        fontFamily={"Proxima Nova"}
        bg={"none"}
        fontSize="1em"
        className="SignUpBtn"
      >
        Sign Up / Sign In
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="0px">
          <ModalHeader>SIGN UP</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="10px">
            <form onSubmit={(e) => handleSubmit(e)} id="signupForm">
              <FormControl display="flex" flexDirection="column" gap="10px">
                <Input
                  fontFamily="Proxima Nova"
                  placeholder="Full Name"
                  borderRadius={"0"}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  fontFamily="Proxima Nova"
                  placeholder="Email"
                  borderRadius={"0"}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  fontFamily="Proxima Nova"
                  placeholder="Password (More than 8 characters)"
                  borderRadius={"0"}
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              bg="#Faa619"
              mr={3}
              borderRadius="0"
              color="white"
              _hover={{ bg: "#FAA619", color: "black", transition: "0.1s" }}
              form="signupForm"
            >
              SIGN UP
            </Button>
            <Login status={signupStatus} closeSignup={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LoginWrapper>
  );
};

export default Signup;