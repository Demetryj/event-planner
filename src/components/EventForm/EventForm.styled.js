import styled from 'styled-components';
import { Form } from 'formik';
// import { IoMdClose } from 'react-icons/io';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export const FormWrap = styled(Form)`
  padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(4)};

  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.main};
  background-color: ${p => p.theme.colors.backgroundWhite};

  @media screen and (${p => p.theme.media.medium}) {
    padding-left: ${p => p.theme.spacing(6)};
    padding-right: ${p => p.theme.spacing(6)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(10)};
    padding-bottom: ${p => p.theme.spacing(13.5)};
    padding-left: ${p => p.theme.spacing(10)};
    padding-right: ${p => p.theme.spacing(10)};
  }
`;

// export const Title = styled.p`
//   margin-bottom: ${p => p.theme.spacing(2)};

//   font-size: ${p => p.theme.fontSizes.m};
//   font-weight: ${p => p.theme.fontWeights.regular};
//   line-height: ${p => p.theme.lineHeights.s};
//   letter-spacing: 0.4px;

//   color: ${p => p.theme.colors.purpleText};
// `;

// export const TitlePicture = styled.p`
//   margin-bottom: ${p => p.theme.spacing(2)};
//   font-size: ${p => p.theme.fontSizes.m};
//   font-weight: ${p => p.theme.fontWeights.regular};
//   line-height: ${p => p.theme.lineHeights.s};
//   letter-spacing: 0.4px;

//   color: ${p => p.theme.colors.disabledInput};
// `;

// export const WrapperInput = styled.div`
//   position: relative;
//   margin-bottom: ${p => p.theme.spacing(5)};
// `;

// export const Label = styled.label`
//   position: relative;
// `;

// export const Input = styled.input`
//   padding-top: ${p => p.theme.spacing(4)};
//   padding-bottom: ${p => p.theme.spacing(4)};
//   padding-left: ${p => p.theme.spacing(3)};
//   padding-right: ${p => p.theme.spacing(9)};

//   width: ${p => (p.as === 'textarea' ? '100%' : 'calc(100% - 50px)')};
//   height: ${p => p.as === 'textarea' && p.theme.spacing(39)};
//   resize: ${p => p.as === 'textarea' && 'none'};

//   font-family: inherit;
//   font-size: ${p => p.theme.fontSizes.m};
//   font-style: inherit;
//   font-weight: ${p => p.theme.fontWeights.regular};
//   line-height: ${p => p.theme.lineHeights.l};
//   color: ${p => p.theme.colors.inputText};

//   border: ${p => p.theme.borders.normal};
//   border-radius: ${p => p.theme.radii.s};
//   border-color: ${p => {
//     if (p.err) {
//       return p.theme.colors.borderInputFail;
//     } else {
//       return p.theme.colors.borderPurple;
//     }
//   }};

//   &:placeholder-shown {
//     border-color: ${p => !p.err && p.theme.colors.borderInput};
//   }

//   &::placeholder {
//     font-family: inherit;
//     font-size: ${p => p.theme.fontSizes.m};
//     font-style: inherit;
//     font-weight: ${p => p.theme.fontWeights.regular};
//     line-height: ${p => p.theme.lineHeights.l};

//     color: ${p => p.theme.colors.inputPlaceholder};
//   }
// `;

// export const Textarea = styled.textarea`
//   margin-bottom: ${p => p.theme.spacing(5)};
//   padding-top: ${p => p.theme.spacing(4)};
//   padding-bottom: ${p => p.theme.spacing(4)};
//   padding-left: ${p => p.theme.spacing(3)};
//   padding-right: ${p => p.theme.spacing(9)};

//   width: 100%;
//   height: ${p => p.theme.spacing(39)};

//   font-family: inherit;
//   font-size: ${p => p.theme.fontSizes.m};
//   font-style: inherit;
//   font-weight: ${p => p.theme.fontWeights.regular};
//   line-height: ${p => p.theme.lineHeights.l};
//   color: ${p => p.theme.colors.inputText};

//   border: ${p => p.theme.borders.normal};
//   border-radius: ${p => p.theme.radii.s};
//   border-color: ${p => p.theme.colors.borderInput};

//   resize: none;

//   &::placeholder {
//     font-family: inherit;
//     font-size: ${p => p.theme.fontSizes.m};
//     font-style: inherit;
//     font-weight: ${p => p.theme.fontWeights.regular};
//     line-height: ${p => p.theme.lineHeights.l};

//     color: ${p => p.theme.colors.inputPlaceholder};
//   }
// `;

// export const RemoveIcon = styled(IoMdClose)`
//   position: absolute;
//   width: ${p => p.theme.spacing(6)};
//   height: ${p => p.theme.spacing(6)};

//   transform: translate(
//     ${p => p.theme.spacing(-10)},
//     ${p => p.theme.spacing(4.25)}
//   );

//   color: ${p => {
//     if (p.disabled) {
//       return p.theme.colors.iconDisabled;
//     } else if (p.err) {
//       return p.theme.colors.iconInputFail;
//     } else {
//       return p.theme.colors.iconInput;
//     }
//   }};

//   &:hover,
//   &:focus {
//     cursor: pointer;
//   }
// `;

// export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
//   width: ${p => p.theme.spacing(6)};
//   height: ${p => p.theme.spacing(6)};
//   color: ${p => p.theme.colors.iconInput};
//   cursor: pointer;
// `;

// export const ArrowUp = styled(MdOutlineKeyboardArrowUp)`
//   width: ${p => p.theme.spacing(6)};
//   height: ${p => p.theme.spacing(6)};
//   color: ${p => p.theme.colors.iconInput};
//   cursor: pointer;
// `;

export const Button = styled.button`
  display: block;
  margin-top: ${p => p.theme.spacing(10)};
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4)};
  width: 100%;

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: inherit;

  color: ${p => p.theme.colors.whiteText};

  background-color: ${p =>
    p.disabled ? p.theme.colors.buttonDisabled : p.theme.colors.button};
  border-radius: ${p => p.theme.radii.s};

  @media screen and (${p => p.theme.media.medium}) {
    margin-right: 0;
    width: ${p => p.theme.spacing(48.25)};
  }

  @media screen and (${p => p.theme.media.large}) {
    margin-top: ${p => p.theme.spacing(15)};
  }

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${p => !p.disabled && p.theme.colors.buttonAccent};
  }
`;
