import { useState } from "react";
import styled from "styled-components";

function UserProfile() {
  const [loading, setLoading] = useState<boolean>(true);
  if (loading) {
    return (
      <SkeletonContainer>
        <div className="user-profile">
          <span className="first" />
          <span className="second" />
        </div>
        <div className="user-details">
          <span className="first" />
          <span className="second" />
        </div>
        <div className="user-details">
          <span className="first" />
          <span className="second" />
        </div>
        <div className="user-details">
          <span className="first" />
          <span className="second" />
        </div>
      </SkeletonContainer>
    );
  }
  return <Container>UserProfile</Container>;
}
export default UserProfile;

const Container = styled.div``;

const SkeletonContainer = styled.section`
  margin: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  span {
    background-color: #d6d6d6;
  }
  .user-profile {
    display: flex;
    gap: 30px;
    align-items: center;
    .first {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .second {
      width: 40vw;
      height: 40px;
      border-radius: 10px;
    }
  }
  .user-details {
    display: flex;
    gap: 30px;
    align-items: center;
    .first {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    .second {
      width: 40vw;
      height: 40px;
      border-radius: 10px;
    }
  }
`;
