const FunctionComp = (props) => {
   
    // destructuring props 
    const {myName,post} = props;
  return (
    <div>
      <h2>This is My Function Component</h2>
      {/* <p>My Name is: <strong>{props.myName}</strong>, I am <strong>{props.post}</strong> </p> */}
      
      <p>My Name is: <strong>{myName}</strong>, I am <strong>{post}</strong> </p>
    </div>
  );
};

export default FunctionComp;
