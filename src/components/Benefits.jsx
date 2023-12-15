import React from "react";
import styled from "styled-components";
import HeadCombo from "../helpers/HeadCombo";
import InfoCard from "../helpers/InfoCard";
import { MdPerson2 } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";

const Benefits = () => {
  return (
    <Wrapper id="benefits">
      <HeadCombo
        heading={"Benefits"}
        description={"Your Benefits of Studying at Codex Online Platform"}
      />
      <div className="container">
        <InfoCard
          heading={"Permanently active account"}
          description={
            "Continuous account functionality without any time limitations or deactivation."
          }
          icon={<MdPerson2 color={"#4d70b9"} size={42} />}
        />
        <InfoCard
          heading={"Guaranteed Material Updation"}
          description={
            "Assured and continous regular updates with fresh content material guaranteed."
          }
          icon={<FaRegThumbsUp color={"#4d70b9"} size={42} />}
        />
        <InfoCard
          heading={"More than 1000 material lists available"}
          description={
            "Explore a vast collection of over 1000 material lists & options for your needs."
          }
          icon={<CiBoxList color={"#4d70b9"} size={42} />}
        />
        <InfoCard
          heading={"Be cooled during the learning process"}
          description={
            "Gain practical coding skills & industry-relevant knowledge to excel in career"
          }
          icon={<FaRegSmile color={"#4d70b9"} size={42} />}
        />
        <InfoCard
          heading={"Unlimited material access, forever"}
          description={
            "Access an endless array of educational materials forever & at your own pace."
          }
          icon={<MdOutlineFolderCopy color={"#4d70b9"} size={42} />}
        />
        <InfoCard
          heading={"Guarantee can & understand"}
          description={
            "Guaranteed comprehensive access of code concepts through materials."
          }
          icon={<IoBulbOutline color={"#4d70b9"} size={42} />}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 5.5rem 5rem;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 3rem 0 6rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 780px){
        .container{
                display: flex;
                flex-direction: column;
                align-items: center;
        }
  }
  @media only screen and (max-width: 502px){
        .container{
                margin-left: auto;
                margin-right: auto;
        }
 }
`;

export default Benefits;
