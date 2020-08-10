import React, { useState, useEffect, useCallback } from "react";

import {
  Container,
  HeaderSubTitle,
  HeaderTitle,
  DropdownContainer,
  CardResultContainer,
} from "./styles";
import Card from "../../components/Card";
import DropDownn from "../../components/DropDown";
import Input from "../../components/Input";

import { DDDList, PlansList } from "../../utils/options";
import { getCallValue } from "../../utils/getCallValue";
import { getPlanMinuts } from "../../utils/getPlanMinuts";

const Dashboard: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destine, setDestine] = useState("");
  const [plan, setPlan] = useState("Planos");
  const [minutes, setMinuts] = useState(0);
  const [comFM, setCFM] = useState(0);
  const [semFM, setSFM] = useState(0);
  const [isAplan, setIsAplan] = useState(true);

  useEffect(
    useCallback(() => {
      let price = 0;

      price = getCallValue(origin, destine);
      if (Number(price) === 10) {
        setIsAplan(false);
      } else {
        setIsAplan(true);
      }
      setSFM(Number(price) * Number(minutes));

      if (plan !== "Planos") {
        const planMinuts = getPlanMinuts(plan);

        if (Number(minutes) > Number(planMinuts)) {
          const difference = Number(minutes) - Number(planMinuts);

          const subTotal = difference * price;
          const total = subTotal + subTotal * 0.1;

          setCFM(total);
        } else {
          setCFM(0);
        }
      }
    }, [origin, destine, plan, minutes])
  );

  return (
    <Container>
      <HeaderTitle>Telzir</HeaderTitle>
      <HeaderSubTitle>FaleMais</HeaderSubTitle>

      <Card cColor={"CCC5B9"} cWidth={1215} cHeight={95}>
        <ul>
          <li>Origem</li>
          <li>Destino</li>
          <li>Tempo</li>
          <li>Planos FaleMais</li>
          <li>
            <b>Com FaleMais</b>
          </li>
          <li>
            <b>Sem FaleMais</b>
          </li>
        </ul>
      </Card>
      <DropdownContainer>
        <DropDownn options={DDDList} setValue={setOrigin} />
        <DropDownn options={DDDList} setValue={setDestine} />
        <Input minut={minutes} setMinut={setMinuts} />
        <DropDownn options={PlansList} setValue={setPlan} />
        <CardResultContainer>
          <Card cColor={"EB5E28"} cWidth={187} cHeight={48}>
            {isAplan ? <p>${comFM.toFixed(2)}</p> : <p>-</p>}
          </Card>
          <Card cColor={"EB5E28"} cWidth={187} cHeight={48}>
            {isAplan ? <p>${semFM.toFixed(2)}</p> : <p>-</p>}
          </Card>
        </CardResultContainer>
      </DropdownContainer>
    </Container>
  );
};

export default Dashboard;
