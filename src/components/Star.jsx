import * as React from "react";
import Rating from "@mui/material/Rating";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ffff00',
  },
  // '& .MuiRating-iconHover': {//未
  //   color: '#ff0000',
  // },
});

export const  Star = ({rarity}) => {

  const [value, setValue] = React.useState(6);

  return (
    <StyledRating
      size="small"
      // disabled
      name="排出レア"
      value={rarity}
      max={3}
      // onChange={(event, newValue) => {
      //   data.C1[cNameF].ally.star = newValue
      //   setValue(newValue);
      //   Calc()
      // }}
    />
  );
}