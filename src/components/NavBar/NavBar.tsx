import Style from './NavBar.module.css'
import Logo from "@/assets/icons/Logo";
import Row from "@/components/Row"
import Button from "@/components/Button"
import Text from "@/components/Text"

const NavBar = () => {
    return (
        <Row justifyContent="space-between" padding={[16]} fullWidth className={Style.main}>
            <Logo />
            <Row>
                <Button withBorder>
                <Text text="Results"/>
                    
                </Button>
                <Button withBorder>
                    <Text text="About Us"/>
                </Button>
            </Row>
            

        </Row>
    )
}

export default NavBar;