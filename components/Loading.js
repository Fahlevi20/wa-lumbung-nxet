import { Circle } from "better-react-spinkit"

function Loading(){
    return (
        <center>
            <div>
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg"
                alt=""
                style={{marginBottom:10}}
                height={200}
                />
                <Circle color="#3CBC28" size={60} />
            </div>
        </center>
    )
}

export default Loading