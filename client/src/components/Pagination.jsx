import React from "react";

// import { Pagination, PaginationItem } from "@material-ui/lab";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, []);
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={page}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};
export default Paginate;
