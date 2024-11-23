import React from "react";
import '../trash/chat.css'
// const Dialog = () =>{
// //    имя, переписку,
// }

// const dialogItem = () => {
//     return(
//         <></>
//     )
// }
const Chat = () => {
    return(
        <div className={'massager'}>
            <div className={'nameChat'}>
                <div>
                    <div className={'UserChat'}>User1</div>
                    <div className={'UserChat'}>User2</div>
                    <div className={'UserChat'}>User3</div>
                    <div className={'UserChat'}>User4</div>
                </div>
            </div>
            <div className={'chat'}>
                <div className="massages">
                    <div className="massage">
                        Hi
                    </div>
                    <div className="massage">
                        massages 2
                    </div>
                    <div className="massage">
                        massages 3
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Chat