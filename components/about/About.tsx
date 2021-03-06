import React from 'react';
import styled from "@emotion/styled";
import { Typography } from 'antd';
import { COLORS } from "../../common/colors";

const { Title, Text } = Typography;

const Container = styled.div(() => ({
  width: 900,
}));

const titleStyles = {
  margin: 8
};

const About: React.FunctionComponent = () => {
  return (
      <Container>
        <Title>λ°κ°μμ π <Text style={{ color: COLORS.callToAction }}>μ λκ±΄</Text>μ΄λΌκ³  ν΄μ!</Title>
        <Title level={4} style={titleStyles}>
          νμ¬λ <Text strong>νλ‘ νΈμλ</Text> κ°λ°μ λ©μΈμΌλ‘ νκ³  μκ³  νλ‘μ νΈμ λ°λΌμ <Text strong>λ°±μλ</Text> κ°λ°λ νκ³  μμ΅λλ€.
        </Title>
        <Title level={4} style={titleStyles}>
          ν₯ ν λκ΅¬μκ²λ μΈμ λ°λ κ°λ°μκ° λκΈ° μν΄μ μ΄μ¬ν μ°κ΅¬μ μλ¬΄λ₯Ό μ§ν νκ³  μμ΅λλ€.
        </Title>
        <Title level={4} style={titleStyles}>
          μ λΆνλλ¦½λλ€.
        </Title>
        <Title>μ΄λ¨λ λ³΄λμ λλΌμΈμ?</Title>
        <Title level={4} style={titleStyles}>
          μλ‘μ΄ νλ‘μ νΈλ₯Ό μ§ννμ¬ μ£Όλμ μΌλ‘ κ΅¬μ‘°λ₯Ό κ΅¬μ± ν  λ
        </Title>
        <Title level={4} style={titleStyles}>
          κ°λ° ν νλ‘μ νΈκ° κ³ κ°λ€μ΄ λ§μ‘± ν  λ
        </Title>
        <Title level={4} style={titleStyles}>
          νλ‘μ νΈ κΈ°νμ μ΄ν΄νκ³  κ·Έκ²μ λ°νμΌλ‘ κ°λ°μ μ§ν ν  λ
        </Title>
        <Title>κ°λ°μ μμ΄ κ°μ₯ μ€μνκ² μκ°νλ κ²μ΄ μλ€λ©΄?</Title>
        <Title level={4} style={titleStyles}>
          κΈ°νμ μ΄ν΄νκ³  κ°λ°νλ κ²μ΄ κ°μ₯ μ€μνλ€κ³  μκ°ν©λλ€.
        </Title>
        <Title level={4} style={titleStyles}>
          κΈ°νμ λͺ¨λ₯΄λ μνλ‘ κ°λ°μ νκ² λλ€λ©΄ μ λλ‘ νλ¦¬ν° μλ νλ‘μ νΈκ° λμ¬ μκ° μμ΅λλ€.
        </Title>
        <Title>λ¬΄μλ³΄λ€λ μ λ λ°λ³΅μ μ΄κ³  κΈ°κ³μ μΈ μΌμ κ΅μ₯ν μ«μ΄ν΄μ</Title>
        <Title style={{ margin: 0 }}>π±π±π±π±π±π±π±π±π±π±π±π±π±π±π±π±π±π±π±π±π±π±π±</Title>
      </Container>
  );
};

export default About;
