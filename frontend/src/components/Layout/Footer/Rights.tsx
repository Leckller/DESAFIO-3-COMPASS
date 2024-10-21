import styled from 'styled-components';

const StyledRights = styled.section`
  section {
    padding:  64px;
  }
`;

function Rights() {
  return (
    <StyledRights>
      <section>
        <small>2023 furniro. All rights reverved</small>
      </section>
    </StyledRights>
  );
}

export default Rights;
