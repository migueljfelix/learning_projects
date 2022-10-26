import React, { useState } from "react";
import Weekly from "../components/Weekly";
import styled from "styled-components";
import Daily from "../components/Daily";
import { AnimatePresence, motion } from "framer-motion";

function Trending() {
  const [activeTab, setActiveTab] = useState("weekly");
  return (
    <AnimatePresence exitBeforeEnter>
      <ButtonWrapper>
        <div>
          <Buttons>
            <Button
              className={activeTab === "weekly" ? "active" : ""}
              onClick={() => setActiveTab("weekly")}
            >
              Weekly
            </Button>
            <Button
              className={activeTab === "daily" ? "active" : ""}
              onClick={() => setActiveTab("daily")}
            >
              Daily
            </Button>
          </Buttons>
          {activeTab === "weekly" && (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Weekly />
            </motion.div>
          )}
          {}
          {activeTab === "daily" && (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Daily />
            </motion.div>
          )}
        </div>
      </ButtonWrapper>
    </AnimatePresence>
  );
}

export default Trending;

const ButtonWrapper = styled.div`
  margin-bottom: 5rem;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    background: #183745;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 58px;
  color: #FFF;
  background: #050e12;
  border: 2px solid black;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
