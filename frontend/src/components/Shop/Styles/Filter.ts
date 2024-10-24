import styled from 'styled-components';
import ITheme from '../../../Utils/Themes';

export const StyledFilter = styled.section`
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    background-color: ${(p) => (p.theme as ITheme).Gold_md} !important;
    padding: 16px;

    section {
      display: flex;
      flex-direction: row !important;
      gap: 16px;

      label {
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
        font-weight: 700;

        input {
          width: 62px;
        }

        input, select {
          outline: none;
          border: none;
          padding: 8px;
        }
      }
    }
  `;
