import React from "react";
import styled from "styled-components";
import { BlogItems } from "../dummyData";


const BlogSection = () => {
  return (
    <Container>
      {BlogItems.map(() => (
        <BlogItem>
            <Top>
                <BlogImage src="" alt="" />
            </Top>
            <Middle>
                <Author></Author>
                <Comments></Comments>
            </Middle>
            <Bottom>
                <Title></Title>
                <Description></Description>
                <ReadMore></ReadMore>
            </Bottom>
        </BlogItem>
      ))}
    </Container>
  );
};

export default BlogSection;

const Container = styled.section`
  display: flex;
`;

const BlogItem = styled.div`
  flex: 1;
`;

const Top = styled.div``

const BlogImage = styled.img``

const Middle = styled.div``

const Author = styled.div``

const Comments = styled.div``

const Bottom = styled.div``

const Title = styled.h3``

const Description = styled.p``

const ReadMore = styled.a``
