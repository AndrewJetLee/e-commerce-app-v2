import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material/";
import styled from "styled-components";

const Dropdown = ({ value, handleChangeDropdown, label, choices }) => {
  if (choices) {
    return (
      <Container>
        <FormControl sx={{ minWidth: 120, width: 1 / 2, }}>
          <Select
            value={value}
            onChange={(e) => handleChangeDropdown(e, label)}
            inputProps={{ "aria-label": "Without label" }}
          >
            {choices.map((item, key) => (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    );
  } else {
    return <></>
  }
};

export default Dropdown;

const Container = styled.div``;
