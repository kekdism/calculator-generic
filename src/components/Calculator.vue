<script>
import calculator from '@/utils/Calculator';
export default {
  name: 'calculator-component',
  data: () => {
    return {
      history: calculator.history,
      screen: calculator.screen,
    }
  },
  computed: {
    mockArray() {
      const mock = [];
      for (let i = 1; i < 21; i++) {
        mock.push(i);
      }
      return mock;
    },
    buttonList() {
      return calculator.getCalculatorButtons();
    },
    gridAreaValue(title) {
      return 'but(' + title + ')';
    }
  },
  methods: {
    increase() {
      this.screen += 1;
    }
  }
}
</script>
<template>
  <div class="backdrop">
    <div class="calculator">
      <div class="display">
        <div class="history">{{ history.value }}</div>
        <div class="screen">{{ screen.value }}</div>
      </div>
      <div class="numpad">
        <button type="button" class="button" v-for="(button, label) in buttonList" :key="label" @click="button.action"
          :style="{ gridArea: label }">
          {{ button.text }}
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.backdrop {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  border-radius: 18px;
  width: 100%;
  max-width: 616px;
  height: 100%;
  max-height: 876px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calculator {
  width: 100%;
  height: 100%;
  max-width: 554px;
  max-height: 800px;
  background: linear-gradient(155.23deg, #28518E 0%, #3A77D1 100%);
  box-shadow: 0px 82px 158px rgba(0, 0, 0, 0.35), 0px 24.7206px 47.6324px rgba(0, 0, 0, 0.228056), 0px 10.2677px 19.7841px rgba(0, 0, 0, 0.175), 0px 3.71362px 7.1555px rgba(0, 0, 0, 0.121944);
  border-radius: 18px;
  padding: 1em 3em 2em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: var(--text-main);
}

.display {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  flex: 1;
  margin-bottom: 2rem;
}

.history {
  background-color: transparent;
  border: none;
  padding: 0;
  resize: none;
  font-size: 1.5em;
  line-height: 2em;
  color: inherit;
  text-align: right;
}

.history:focus {
  outline: none;
}

.screen {
  font-family: inherit;
  font-size: 56px;
  line-height: 143%;
  font-weight: 700;
  padding: 2rem 0 1rem;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.35);
  background-color: transparent;
  box-sizing: border-box;
  text-align: right;
  color: inherit;
}

.screen:focus {
  outline: none;
}

.numpad {
  display: grid;
  gap: 1em;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 5rem);
  grid-template-areas: "reset sqrt per div" "num7 num8 num9 mult" "num4 num5 num6 sub" "num1 num2 num3 add" "sign num0 delim equal";
}

.button {
  padding: 0;
  font-size: 32px;
  font-family: inherit;
  color: inherit;
  border: 0;
  background-color: transparent;
}

/*[ "C",
"√",
"%",
"/",
"7",
"8",
"9",
"×",
"4",
"5",
"6",
"-",
"1",
"2",
"3",
"+",
"rev",
"0",
",",
"=",
];*/
</style>