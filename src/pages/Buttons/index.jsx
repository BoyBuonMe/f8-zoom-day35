import Button from "../../components/Button";
import styles from "./Buttons.module.scss";

function Buttons() {
  return (
    <div className={styles.container}>
      <div>
        Variant
        <div className={styles.variant}>
          <Button primary>Hello</Button>
          <Button rounded>Hello</Button>
          <Button bordered>Hello</Button>
        </div>
      </div>

      <div>
        Size and disable
        <div className={styles.variant}>
          <Button size="small">Hello</Button>
          <Button>Hello</Button>
          <Button size="big" disable>
            Hello
          </Button>
        </div>
      </div>

      <div>
        Element a
        <div className={styles.variant}>
          <Button
            primary
            href={
              "https://zoom.fullstack.edu.vn/?id=1a5c89c4-0d43-4be1-8859-4ff84490cb4c#bai-button-component"
            }
          >
            Hello
          </Button>
        </div>
      </div>

      <div>
        Custom Classname
        <div className={styles.variant}>
          <Button primary className={styles.customBtn}>
            Hello
          </Button>
        </div>
      </div>

      <div>
        Loading
        <div className={styles.variant}>
          <Button primary loading>
            Hello
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
