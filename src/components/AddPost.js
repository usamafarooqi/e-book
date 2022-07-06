import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import {
  DateRange,
  EmojiEmotions,
  Image,
  Person,
  Videocam,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Usermodeal = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
const AddPost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        onClick={handleOpen}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 50,
          left: { xs: "calc(50%)", md: 50 },
        }}
      >
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"white"}
          borderRadius={5}
          padding={3}
        >
          <Typography variant="h6" textAlign={"center"} color="gray">
            Create post
          </Typography>
          <Usermodeal>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography variant="h6" fontWeight={500}>
              usama
            </Typography>
          </Usermodeal>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <Videocam color="success" />
            <Person color="error" />
          </Stack>
          <ButtonGroup
            fullWidth={true}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
