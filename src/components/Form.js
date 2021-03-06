import React, { useState } from "react";
import styled from "styled-components";
import ClearIcon from "@material-ui/icons/Clear";
import "./Icon.css";

const Formbackground = styled.div`
  position: center;
  display: fixed;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(149, 126, 128, 0.75);
  z-index: 4;
  min-height: 100vh;
  width: 100%;
`;

const Textarea = styled.textarea`
  position: fixed;
  display: center;
  vertical-align: middle;
  left: 50%;
  top: 50%;
  border-radius: 10px;
  height: 40%;
  width: max(40%, 250px);
  background-color: #c39c89;
  font-size: 24px;
  color: #eee2d3;
  z-index: 8;
  resize: none;
  transform: translate(-50%, -50%);

  outline: none;
  border: none;
  padding: 20px;
`;

const Inputbutton = styled.input`
  position: fixed;
  top: 70%;
  left: 65%;
  border-radius: 5px;
  height: 45px;
  width: 66px;
  font-size: 20px;
  font-family: serif;
  font-weight: bolder;
  color: #c39c89;
  background-color: #eee2d3;
  border: white;
  z-index: 10;
  transform: translateY(-100%);
`;

function Form({ setIsOpenModal, addInfoList }) {
  const [info, setInfo] = useState("");
  return (
    <Formbackground>
      <Inputbutton value=" share  " onClick={() => addInfoList(info)} />

      <Textarea
        row="8"
        cols="20"
        placeholder={"おすすめのスイーツやカフェの情報を共有しよう！"}
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />

      <ClearIcon
        className="Deletebutton"
        onClick={() => setIsOpenModal(false)}
      />
    </Formbackground>
  );
}
export default Form;
