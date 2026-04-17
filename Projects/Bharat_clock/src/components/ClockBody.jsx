function ClockBody() {
  let date = new Date();
  return (
    <div className="lead">
      The current time in India is: {date.toDateString()}-
      {date.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" })}
    </div>
  );
}
export default ClockBody;
