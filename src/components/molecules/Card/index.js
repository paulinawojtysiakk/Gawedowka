import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "src/components/atoms/Button";

const BasicCard = ({
  src,
  imgWidth,
  title,
  description,
  onClick,
  maxWidth,
  buttonText,
  variant,
  titleColor,
  descriptionColor,
}) => {
  return (
    <Card sx={{ maxWidth: maxWidth }}>
      <CardActionArea>
        <CardMedia component="img" max-width={imgWidth} src={src} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: titleColor }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ color: descriptionColor }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center", margin: "10px 0" }}>
        <Button variant={variant} text={buttonText} onClick={onClick} />
      </CardActions>
    </Card>
  );
};
export default BasicCard;
