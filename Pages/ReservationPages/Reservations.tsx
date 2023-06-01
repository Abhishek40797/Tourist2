import { BigImages, BigTextSection, H1, Para, Wrapper } from "../../StyledComponents/Styling"
import { ReservationCards } from "../Cards.tsx/ReservationCards"
import { Footer } from "../Footer"
import { Header } from "../Header"

export const Reservations = ()=>{
    return (
        <>
            {/* <Header/> */}
            <Wrapper>
                <div className="flex justify-between flex-direction" style={{marginTop:"150px"}}>
                <BigTextSection>
                        <H1>Best Every Resevations For Your</H1>
                        <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?</Para>
                    </BigTextSection>
                    <BigImages src="assets/asset 9.jpg" alt="" className="big-image" />
                </div>
                <ReservationCards />
            </Wrapper>
            <Footer />
        </>
    )
}