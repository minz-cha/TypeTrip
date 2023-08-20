import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Tags() {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={styleTag}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="내가 원하는 여행은?"
          placeholder="최소 1개, 최대 5개 골라주세요!"
        />
      )}
    />
  );
}

const styleTag = [
  { title: "자유로운" },
  { title: "드라이빙 좋아하는" },
  { title: "맛집 탐방" },
];
