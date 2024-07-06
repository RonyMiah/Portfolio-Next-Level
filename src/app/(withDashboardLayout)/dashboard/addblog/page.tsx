"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Button,
  Container,
} from "reactstrap";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });


import { useRef } from "react";
import { toast } from "sonner";
import axios from "axios";

const AddPost = () => {
  const editor = useRef(null);
  // const [content,setContent] =useState('')
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(undefined);

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const [image, setImage] = useState(null);

  // const config={
  //     placeholder:"Start typing...",

  // }

  //field changed function
  const fieldChanged = (event: any) => {
    // console.log(event)
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentFieldChanaged = (data: any) => {
    setPost({ ...post, content: data });
  };

  //create post function
  const createPost = async (event: any) => {
    event.preventDefault();

    // console.log(post)
    if (post.title.trim() === "") {
      toast.error("post  title is required !!");
      return;
    }

    if (post.content.trim() === "") {
      toast.error("post content is required !!");
      return;
    }

    //submit the form one server

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/blog/create-blog",
        post
      );
      if (response.data.success) {
        toast.success("Blog Post Successfully ");
        setPost({ title: "", content: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //handling file chagne event
  // const handleFileChange=(event: any)=>{
  //     console.log(event.target.files[0])
  //     setImage(event.target.files[0])
  // }

  return (
    <div className="wrapper">
      <Card className="shadow-sm  border-0 mt-2">
        <CardBody>
          {/* {JSON.stringify(post)} */}
          <h3 className="text-3xl">Create A New Blog Post</h3>
          <Form onSubmit={createPost}>
            <div className="my-3">
              <Label for="title">Post title</Label>
              <br />
              <Input
                type="text"
                id="title"
                value={post.title}
                placeholder="Enter Your Title"
                className="rounded-0 bg-white-200 p-2 w-[100%] "
                name="title"
                onChange={fieldChanged}
              />
            </div>

            <div className="my-3">
              <Label for="content">Post Content</Label>
              {/* <Input
                                type="textarea"
                                id="content"
                                placeholder="Enter here"
                                className="rounded-0"
                                style={{ height: '300px' }}
                            /> */}

              <JoditEditor
                ref={editor}
                value={post.content}
                onChange={(newContent) => contentFieldChanaged(newContent)}
              />
            </div>

            <Container className="text-center pb-4">
              <Button
                type="submit"
                className="rounded-0 bg-purple px-10 py-2 rounded-lg"
                color="primary"
              >
                Create Post
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;
