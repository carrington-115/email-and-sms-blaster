import styled from "styled-components";
import colors from "../data/colors";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

interface blasterType {
  type: string;
}

export default function BlasterSection({ type }: blasterType) {
  const [loading, setLoading] = useState<boolean>(true);
  const [item, setItem] = useState<string>("");
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [blasterItems, setBlasterItems] = useState<string[]>([]);

  function addBlasterItem(text: string) {
    try {
      if (text !== "") {
        setBlasterItems((prevItems) => {
          return [...prevItems, text];
        });
        setItem("");
      } else {
        throw new ReferenceError("No empty data");
      }
    } catch (e) {
      console.log(e);
    }
  }
  function removeFromBlaster(elementToRemove: string) {
    setBlasterItems((prevArray) => {
      const index = prevArray.indexOf(elementToRemove);
      if (index !== -1) {
        return [...prevArray.slice(0, index), ...prevArray.slice(index + 1)];
      }
      return prevArray;
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  if (loading) {
    return <BlasterSkeleton />;
  }
  return (
    <Container
      style={{ backgroundColor: `${colors.lightMode.primaryContainerColor}` }}
    >
      <div className="input-section">
        <input
          type="text"
          placeholder={`${
            type === "sms" ? "Enter a contact" : "Enter an email"
          }`}
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <span
          className="add-btn"
          onClick={() => addBlasterItem(item)}
          style={{
            backgroundColor: `${colors.lightMode.primaryColor}`,
            color: "white",
            fontSize: "24px",
          }}
        >
          +
        </span>
      </div>
      <div
        className="search-section"
        style={{
          border: `${
            searchActive
              ? `2px solid ${colors.lightMode.primaryColor}`
              : "2px solid transparent"
          }`,
        }}
      >
        <span>
          <CiSearch
            style={{ width: "36px", height: "36px" }}
            fill={`${colors.lightMode.primaryColor}`}
          />
        </span>
        <input
          type="text"
          onClick={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
          placeholder={`${
            type === "sms" ? "Search a contact" : "Search an email"
          }`}
        />
      </div>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
        }}
      >
        {blasterItems.map((text: string, index: number) => (
          <ContactElement
            key={index}
            removeItem={() => removeFromBlaster(text)}
            text={text}
          />
        ))}
      </section>
    </Container>
  );
}

function ContactElement({
  text,
  removeItem,
}: {
  text: string;
  removeItem: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        alignItems: "center",
        padding: "5px 20px",
        fontSize: "24px",
        backgroundColor: "white",
        borderRadius: "30px",
      }}
    >
      <p>{text}</p>
      <span
        onClick={removeItem}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          borderRadius: "50%",
          backgroundColor: `${colors.lightMode.primaryColor}`,
          cursor: "pointer",
        }}
      >
        <IoMdClose fill="white" style={{ width: "24px", height: "24px" }} />
      </span>
    </div>
  );
}

function BlasterSkeleton() {
  return (
    <SkeletonContainer>
      <div className="input">
        <span
          style={{ backgroundColor: `${colors.lightMode.skeletonColor}` }}
          className="first-input-part"
        />
        <span
          style={{ backgroundColor: `${colors.lightMode.skeletonColor}` }}
          className="second-input-part"
        />
      </div>
      <span
        style={{ backgroundColor: `${colors.lightMode.skeletonColor}` }}
        className="search-contacts"
      />
      <span
        style={{ backgroundColor: `${colors.lightMode.skeletonColor}` }}
        className="contacts"
      />
      <span
        style={{ backgroundColor: `${colors.lightMode.skeletonColor}` }}
        className="contacts"
      />
      <span
        style={{ backgroundColor: `${colors.lightMode.skeletonColor}` }}
        className="contacts"
      />
    </SkeletonContainer>
  );
}

const Container = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 40px;
  border-radius: 20px;
  .input-section {
    display: flex;
    gap: 20px;
    input {
      width: 530px;
      padding: 15px 20px;
      font-size: 24px;
      border-radius: 10px;
      border: none;
      background-color: white;
    }
    .add-btn {
      padding: 5px 20px;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .search-section {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: white;
    padding: 10px 30px;
    border-radius: 30px;
    input {
      outline: none;
      border: none;
      font-size: 24px;
    }
  }
`;
const SkeletonContainer = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: #d1d1d12d;
  span {
    height: 50px;
    border-radius: 10px;
  }
  .input {
    display: flex;
    gap: 20px;
    .first-input-part {
      width: 500px;
    }
    .second-input-part {
      width: 80px;
    }
  }
  .search-contacts {
    border-radius: 30px;
    width: 450px;
  }
  .contacts {
    border-radius: 30px;
    width: 330px;
  }
`;
