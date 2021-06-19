import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 1000px;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2rem;

  background-color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;