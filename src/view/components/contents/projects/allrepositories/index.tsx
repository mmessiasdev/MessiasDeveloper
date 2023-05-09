import { useEffect, useState } from "react";
import { Container, ContainerGridProj } from "../../../styeles/container/style";
import ContentProjects from "../containerprojsmall";
import { FaGithub, FaPaste } from "react-icons/fa";
import { Button } from "@mui/material";


const AllRepositories = () => {

  const [user, setProduct] = useState<GithubRepoModel[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mmessiasdev/repos").then(response => response.json()).then(data => setProduct(data));
    console.log(user);
  }, [])


  return (
    <>
      <Container width="100%" color="f4f4f4">
        <Container width="100%" pad="100px 0px 40px 0px " disp="flex" justify="start">
          <h4>Todos</h4>
        </Container>
        <ContainerGridProj>
          {user.map((res) => {
            return (
              <>
                <Container pad="40px 0px" disp="flex" justify="center" aligh="center" direc="column" data-aos="fade" data-aos-delay="500" data-aos-duration='2000'>
                  <ContentProjects title={res.name} desc={res.description} href={res.html_url} icon1={<FaGithub />} icon2={res.language} />
                  <Container width="100%" pad="0px 30px">
                    <Button fullWidth onClick={() => {
                      navigator.clipboard.writeText(res.clone_url)
                      alert(`Use o comando "git clone ${res.clone_url}" no terminal.`);
                    }} variant="contained" style={{
                      margin: '20px 0px 0px 0px',
                      backgroundColor: "#00FF38",
                      fontSize: "18px",
                      fontFamily: 'Montserrat'
                    }}
                      startIcon={<FaPaste />}
                    >Git Clone</Button>
                  </Container>

                </Container>
              </>
            )
          })}
        </ContainerGridProj>

      </Container>
    </>
  )
}

export default AllRepositories;