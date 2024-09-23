function Square({value}) {
    return (
       <>
        <button className="square" onClick={sticked}> {value} </button>
       </>
    );
}

function sticked() {
    console.log("clicked");
}

export default function Box() {
    return (
    <><div className="box">
       <Square value="1" />
       <Square value="2" />
       <Square value="3" />
    </div>
    <div className="box">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
    </div>
        <div className="box">
        <Square value="7" />
       <Square value="8" />
       <Square value="9" />
        </div></>
    );
  }
  