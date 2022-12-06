import Button from "../../../components/Button"
import Task from "../../../interfaces/Task"
import { styled } from "../../../stitches.config"
import Card from "../../Tasks/components/Card/Card"

export default function Products() {
    const firstTask: Task = {
        id: 0,
        createdAt: "11/10/2022",
        resume: "Buy new switches",
        description: "I need new switches, because I bought brown ones, but I think the blue ones would be better",
    }
    const secondTask: Task = {
        id: 0,
        createdAt: "12/06/2004",
        resume: "Keep away from her",
        description: "She is a good friend, but i don't have mental to deal with her",
    }
    return (
        <Wrapper>
            <Content>
                <Heading>
                    <Title>Manage your tasks with GoTo Task</Title>
                    <Text>Project management software that enables you plan, analyze and manage everyday tasks and take your notes faster</Text>
                    <ButtonHolder>
                        <LetsUseButton as='a' href='/login'>Lets Use</LetsUseButton>
                    </ButtonHolder>
                </Heading>
                <TaskHolder>
                    <Card task={firstTask} disable />
                    <Card task={secondTask} disable />
                </TaskHolder>
            </Content>
        </Wrapper>
    )
}


const Wrapper = styled('section', {
    width: '100%',
    height: 'calc(100vh - 72px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


    '@sm': {
        height: 'unset',
        padding: '30px 0',
        paddingTop: '10px',
        paddingBottom: 100,
    }
})

const Content = styled('div', {
    responsiveWidth: "$width",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,

    '@sm': {
        flexDirection: 'column',
        gap: 40
    }
})

const TaskHolder = styled('div', {
    display: "flex",
    flexDirection: 'column',
    margin: '0 60px',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 550,

    '@sm': {
        responsiveWidth: 550,
        width: '90%',
    }

})

const Heading = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    responsiveWidth: 550,
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    gap: 20,

    '@sm': {
        width: '90%'
    }
})

const Title = styled('h1', {
    color: '$white',
    fontFamily: "Inter",
    fontSize: "64px",
    fontWeight: "700",
    letterSpacing: "-0.02em",

    '@sm': {
        fontSize: "60px",
    }
})

const Text = styled('p', {
    opacity: .8,
    color: '$white',
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "30px",
    letterSpacing: "-0.02em",
})
const ButtonHolder = styled('section', {
    marginTop: 30,
    width: '100%',

    '@sm': {
        display: 'flex',
        justifyContent: "center",
    }
})
const LetsUseButton = styled(Button, {
    padding: '20px 80px',
})
