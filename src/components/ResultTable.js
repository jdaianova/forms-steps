function ResultTable({ arrDays }) {

  arrDays.map((item, i) => {
    if (i < arrDays.length - 1) {
      if (Date.parse(item.date) < Date.parse(arrDays[i + 1].date)) {
        let temp = item;
        arrDays[i] = arrDays[i + 1];
        arrDays[i + 1] = temp;
      };
    };
  });

  const deleteItem = (e) => {
    e.target.parentElement.remove();
  };

  return (
    <>
      <div className="result-table-columns">
        <div className="lable-text table-column">Дата (дд.мм.гг)</div>
        <div className="lable-text table-column">Пройдено (км)</div>
        <div className="lable-text table-column">Действия</div>
      </div>

      <div className="result-table-border">
        {arrDays.map((item, i) => {
          return (
            <div className="result-table-columns" key={i}>
              <div className="lable-text table-column">
                {new Date(item.date).getDate()}.
                {new Date(item.date).getMonth()}.
                {new Date(item.date).getFullYear()}
              </div>
              <div className="lable-text table-column">{item.km}</div>
              <div className="lable-text table-column" onClick={deleteItem}>Х</div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default ResultTable;