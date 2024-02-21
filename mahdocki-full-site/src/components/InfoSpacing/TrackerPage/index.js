import styles from "./TrackerPage.module.css";
import globalStyles from "styles/globalText.module.css";
import React from "react";
import cell from "assets/images/cell.png";

export default function TrackerPage() {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <h1 className={globalStyles.globalH3}>
          Rastreie e controle seu veículo direto do seu celular
        </h1>
        <p className={globalStyles.globalPBig}>
          O rastreamento de veículos via celular permite monitorar carros em
          tempo real. Localização, alertas de movimentação não autorizada e até
          bloqueio remoto aumentam a segurança. Ideal para proprietários e
          gestores de frotas, oferece controle e tranquilidade.
        </p>
        <p className={globalStyles.globalPBig}>
          O rastreamento via celular monitora veículos em tempo real, abrangendo
          localização e status (como combustível e ignição). Isso amplia
          segurança e gestão, ideal para donos de veículos e frotas,
          proporcionando total controle e tranquilidade.
        </p>
        {/* <div className={styles.storeImg}>
          <img
            style={{ paddingRight: "20px" }}
            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2IiBoZWlnaHQ9IjMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iNjEuMzgzJSIgeTE9Ijk1LjQzJSIgeDI9IjI2LjE0MSUiIHkyPSIyNy44OTQlIiBpZD0iYSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQTBGRiIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEExRkYiIG9mZnNldD0iMSUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBCRUZGIiBvZmZzZXQ9IjI2JSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEQyRkYiIG9mZnNldD0iNTElIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwREZGRiIgb2Zmc2V0PSI3NiUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBFM0ZGIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTA3LjY5MiUiIHkxPSI1MCUiIHgyPSItMTI5Ljg4MyUiIHkyPSI1MCUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZFMDAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQkQwMCIgb2Zmc2V0PSI0MSUiLz48c3RvcCBzdG9wLWNvbG9yPSJvcmFuZ2UiIG9mZnNldD0iNzglIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGOUMwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjM2LjY2OCUiIHkxPSI0OC40ODElIiB4Mj0iLTk5LjM0MiUiIHkyPSItNTUuMTIyJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNGRjNBNDQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjQzMxMTYyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iLTY4LjIwNSUiIHkxPSIxMzEuNDU2JSIgeDI9Ii03LjQzNiUiIHkyPSI4NS4xMzYlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzMyQTA3MSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMyREE3NzEiIG9mZnNldD0iNyUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMTVDRjc0IiBvZmZzZXQ9IjQ4JSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwNkU3NzUiIG9mZnNldD0iODAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRjA3NiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBkPSJNNC4zMjMuMjVDMi4wOTguMjUuMzA4IDEuODY0LjMwOCAzLjg0djI0LjMyYzAgMS45NzQgMS43OTQgMy41OSA0LjAxNSAzLjU5aDk2LjQ3YzIuMjIgMCA0LjAxNS0xLjYxNiA0LjAxNS0zLjU5VjMuODRjMC0xLjk3NC0xLjc5NS0zLjU5LTQuMDE2LTMuNTlINC4zMjN6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzcuNzAyIDE3Ljk0NnYxLjIzNWgyLjkzMmMtLjExNiAxLjc2LTEuNTg4IDIuNDY0LTIuOTMyIDIuNDY0LTEuNzYgMC0zLjI4My0xLjM1LTMuMjgzLTMuMjgzIDAtMS44NzYgMS40NjYtMy4zNDggMy4yODMtMy4zNDggMS40MDggMCAyLjIyOC44ODQgMi4yMjguODg0bC44ODMtLjg4NHMtMS4xMTQtMS4yMzUtMy4xNjgtMS4yMzVjLTIuNTggMC00LjU3NiAyLjE3LTQuNTc2IDQuNTE5IDAgMi4yOSAxLjg3NSA0LjU3NiA0LjYzMyA0LjU3NiAyLjQwNyAwIDQuMjI0LTEuNjQ1IDQuMjI0LTQuMTEgMC0uNTI0LS4wNTctLjgxOC0uMDU3LS44MThoLTQuMTY3ek00NS40NDYgMTguMTgyYy44MiAwIDEuNjQ1LjcwNCAxLjY0NSAxLjc2cy0uODE5IDEuNzYtMS42NDUgMS43NmMtLjk0IDAtMS42NDQtLjc2MS0xLjY0NC0xLjc2LS4wNTgtLjk5OC42NDYtMS43NiAxLjY0NC0xLjc2em0tLjA1Ny0xLjEyYy0xLjcwMyAwLTIuOTMxIDEuMzUtMi45MzEgMi44NzQgMCAxLjU4NyAxLjE3IDIuOTMxIDIuOTMgMi45MzEgMS41ODggMCAyLjkzMi0xLjIzNSAyLjkzMi0yLjkzMSAwLTEuODc1LTEuNTIzLTIuODc0LTIuOTMxLTIuODc0ek01MS44OTggMTguMTgyYy44MTkgMCAxLjY0NC43MDQgMS42NDQgMS43NnMtLjgxOSAxLjc2LTEuNjQ0IDEuNzZjLS45NDEgMC0xLjY0NS0uNzYxLTEuNjQ1LTEuNzZhMS42MzkgMS42MzkgMCAwMTEuNjQ1LTEuNzZ6bS0uMDU4LTEuMTJjLTEuNzAyIDAtMi45MzEgMS4zNS0yLjkzMSAyLjg3NCAwIDEuNTg3IDEuMTcxIDIuOTMxIDIuOTMxIDIuOTMxIDEuNTg3IDAgMi45MzEtMS4yMzUgMi45MzEtMi45MzEgMC0xLjg3NS0xLjUyMy0yLjg3NC0yLjkzMS0yLjg3NHpNNTguMjk4IDE4LjE4MmMuNzYxIDAgMS41ODcuNjQ3IDEuNTg3IDEuNzYgMCAxLjExNC0uNzYyIDEuNzYtMS41ODcgMS43Ni0uODI2IDAtMS42NDUtLjcwNC0xLjY0NS0xLjc2cy44MTktMS43NiAxLjY0NS0xLjc2em0tLjEyMi0xLjEyYy0xLjU4NyAwLTIuODE2IDEuMzUtMi44MTYgMi45MzIgMCAxLjc2IDEuNDA4IDIuOTMgMi43NTggMi45My44MiAwIDEuMjkzLS4zNTEgMS41ODgtLjcwM3YuNTg5YzAgLjk5OC0uNTkgMS41ODctMS41MjQgMS41ODdhMS41MSAxLjUxIDAgMDEtMS40NjUtMS4wNTZsLTEuMTE0LjQ2N2MuNDEuODIgMS4xNzEgMS43MDIgMi42NDMgMS43MDIgMS41ODggMCAyLjc1OS0uOTk4IDIuNzU5LTMuMDUydi01LjI4SDU5Ljc3di40NjdjLS4zNTktLjM0Ni0uODktLjU4My0xLjU5NC0uNTgzek02Ni43NDYgMTguMTgyYy41MyAwIC45NC4yOTUgMS4wNTYuNjQ3bC0yLjY0NCAxLjExM2MtLjA1Ny0uODgzLjc2Mi0xLjc2IDEuNTg4LTEuNzZ6bS0uMDY0LTEuMTJjLTEuNDY2IDAtMi43MDEgMS4xNzItMi43MDEgMi45MzIgMCAxLjgxNyAxLjQwOCAyLjkzIDIuODczIDIuOTMgMS4yMzYgMCAxLjk5Ny0uNzAzIDIuNDY0LTEuMjkybC0uOTk4LS42NDZjLS4yMzcuNDEtLjcwNC44MTktMS40MDguODE5LS44MiAwLTEuMTcxLS40NjctMS40MDgtLjg4M2wzLjkzLTEuNjQ1LS4xOC0uNDY3Yy0uNTE4LS45OC0xLjM5NS0xLjc0OC0yLjU3Mi0xLjc0OHpNNjEuOTkgMTQuMTMxaDEuMjkzdjguNjI3SDYxLjk5ek03OS4yMzggMTQuMTMxaDEuMjkzdjguNjI3aC0xLjI5M3pNNzUuNDg4IDE0LjEzMWgtMy4xMXY4LjYyN2gxLjI5MnYtMy4xMWgxLjgxOGEyLjc1OSAyLjc1OSAwIDAwMC01LjUxN3ptMCA0LjE2N0g3My42N3YtMi45MzJoMS44MThjLjgyIDAgMS40NjYuNjQ3IDEuNDY2IDEuNDY2IDAgLjgyLS42NDcgMS40NjYtMS40NjYgMS40NjZ6TTkyLjMyNiAxNy4wNjJsLTEuNzAyIDMuODE1LTEuNjQ1LTMuODE1aC0xLjQwOGwyLjM0OSA1LjQwMi0xLjI5MyAzLjA1M2gxLjQwOGwzLjctOC40NTV6TTg1Ljc1NCAyMi42OTRoMS4yOTJ2LTMuMTFjLjE4LTMuMTY4LTMuODcyLTMuOTMtNS4zOTUtMS42NDVsMS4wNTYuNzA0Yy43NjItMS4yOTMgMi44NzQtLjk5OCAzLjA1My40MS0uNjQ2LS4xNzMtMS4zNS0uMjk1LTEuOTk3LS4yMzctLjk5OC4xMTUtMS44MTcuNzA0LTEuOTk3IDEuNzYtLjA1Ny41MzEuMDU4IDEuMjM1LjQ2OCAxLjY0NS41ODguNjQ2IDEuNTg3Ljc2MSAyLjQwNi41MzEuNDY3LS4xMTUuODItLjQxIDEuMTE0LS43NjJ2LjcwNHptMC0yLjQ2NGExLjkgMS45IDAgMDEtMS40MDggMS40MDhjLTEuNDY2LjQxLTEuODc2LTEuOTk2LjM1Mi0xLjcwMi40MS4wNjQuNzA0LjE4IDEuMDU2LjI5NHoiIGZpbGw9IiNGRkYiLz48ZyBmaWxsPSIjRkZGIj48cGF0aCBkPSJNMzQuMjk4IDcuMDM0aC0xLjIzNnYzLjk4N2gxLjIzNmMuNTg4IDAgMS4xMTMtLjE3MyAxLjQ2NS0uNTMxLjM1Mi0uMzUyLjUyNS0uODg0LjUyNS0xLjQ2NiAwLS41ODktLjE3My0xLjA1Ni0uNTI1LTEuNDY2LS40MS0uMzUyLS44NzctLjUyNC0xLjQ2NS0uNTI0em0wIDMuNDA0aC0uNjQ3VjcuNjIyaC42NDdjLjQxIDAgLjc2MS4xMTYuOTk4LjM1Mi4yMzcuMjM3LjM1Mi41OS4zNTIgMS4wNTYgMCAuNDY4LS4xMTUuODItLjM1MiAxLjA1Ni0uMjM3LjIzLS41ODkuMzUyLS45OTguMzUyek0zNi44NzcgNy4wMzRoMXYzLjk4N2gtMXpNNDAuMzQgOS4wM2MtLjExNi0uMTE1LS4yOTUtLjE3OS0uNDEtLjIzNi0uMTE2LS4wNTgtLjI5NS0uMTE2LS40NjgtLjE4LS4yMzYtLjA1Ny0uNDEtLjE3Mi0uNTI0LS4yMzYtLjExNi0uMTE2LS4xOC0uMTczLS4xOC0uMjk1IDAtLjExNS4wNTgtLjIzNy4xOC0uMzUyYS42Ny42NyAwIDAxLjQ2Ny0uMTczYy4xNzMgMCAuMzUyLjA1OC40NjcuMTE2LjExNS4xMTUuMTguMTc5LjIzNy4yOTR2LjA1OGwuNTg5LS4yMzdWNy43M2MtLjA1OC0uMjM3LS4yMzctLjQxLS40MS0uNTg5LS4yMzctLjE3OS0uNDY3LS4yMzYtLjgyLS4yMzYtLjM1MSAwLS42NDYuMTE1LS44ODIuMzUyLS4yMzcuMjM2LS4zNTIuNDY3LS4zNTIuNzYxIDAgLjI5NS4xMTUuNTI1LjI5NC43MDQuMTguMTczLjQ2Ny4zNTIuODIuNDEuMzUxLjExNS41ODguMjM3LjcwMy4yOTQuMTE1LjExNS4yMzcuMjM3LjIzNy40NjcgMCAuMTgtLjA1OC4yOTUtLjIzNy40MS0uMTE1LjExNS0uMjk0LjE3My0uNTI1LjE3M2EuOTY4Ljk2OCAwIDAxLS41My0uMTczYy0uMTc0LS4xMTUtLjIzOC0uMjk0LS4yOTUtLjUzMXYtLjA1OGwtLjU4OS4yMzd2LjA1OGMuMDU4LjM1Mi4yOTQuNjQ2LjUzMS44MTkuMjk1LjE3My41ODkuMjk0Ljg4My4yOTQuMTczIDAgLjI5NSAwIC40NjgtLjA1Ny4xNzktLjA1OC4yOTQtLjExNi40MS0uMjM3bC4zNTEtLjM1MmMuMDU4LS4xNzMuMTE1LS4zNTIuMTE1LS41MjUgMC0uMTgtLjA1Ny0uMzUyLS4xMTUtLjUzMS0uMTc5LS4xNi0uMjk0LS4yNzUtLjQxNi0uMzl6TTQyLjc0NiA3LjAzNGgtMS40MDh2My45ODdoLjU4OFY5LjQzNGguNzYyYy4zNTIgMCAuNjQ2LS4xMTYuODgzLS4zNTIuMjM3LS4yMzcuMzUyLS41MzIuMzUyLS44ODRzLS4xMTUtLjY0Ni0uMzUyLS44ODNjLS4xNzktLjE2Ni0uNDczLS4yODEtLjgyNS0uMjgxem0uNDczIDEuNjM4YS42Ny42NyAwIDAxLS40NjcuMTczaC0uNzYyVjcuNjE2aC43NjJjLjE4IDAgLjM1Mi4wNTguNDY3LjE3My4xMTUuMTE1LjE4LjI5NC4xOC40MS0uMDA3LjE4NS0uMDY1LjMtLjE4LjQ3M3pNNDYuMzIzIDYuOTEyYy0uNTg5IDAtMS4wNTYuMTczLTEuNDY1LjU4OS0uNDEuNDEtLjU5Ljg4My0uNTkgMS40NjUgMCAuNTkuMTc0IDEuMDU2LjU5IDEuNDY2LjQxNi40MS44ODMuNTg5IDEuNDY1LjU4OS41ODkgMCAxLjA1Ni0uMTczIDEuNDY2LS41ODkuNDEtLjQxLjU4OS0uODgzLjU4OS0xLjQ2NiAwLS41ODgtLjE3My0xLjA1Ni0uNTktMS40NjUtLjQwOS0uMzUyLS44NzYtLjU4OS0xLjQ2NS0uNTg5em0wIDMuNTg0Yy0uNDEgMC0uNzYxLS4xMTUtLjk5OC0uNDEtLjI5NS0uMjk0LS40MS0uNjQ2LS40MS0xLjA1NiAwLS40MS4xMTUtLjgxOS40MS0xLjA1Ni4yOTQtLjI5NC41ODktLjQxLjk5OC0uNDEuNDEgMCAuNzYyLjExNi45OTkuNDEuMjk0LjI5NS40MS42NDcuNDEgMS4wNTYgMCAuNDEtLjExNi44Mi0uNDEgMS4wNTYtLjIzLjI4OC0uNTgzLjQxLS45OTkuNDF6TTUxLjQzIDkuMzE4bC4wNTguNTktMS44MTgtMi44NzRoLS43MDR2My45ODdoLjU5VjcuOTY4bDEuODc0IDIuOTk1di4wNThoLjY0N1Y3LjAzNGgtLjY0N3pNNTMuODM3IDYuMDM1aC0uNjQ3bC0uMzUyLjgyaC41MjV6TTUyLjgzOCA3LjAzNGgxdjMuOTg3aC0xeiIvPjxwYXRoIGQ9Ik01NS40NzUgMTAuMDg2bC0uOTkyLTMuMDUyaC0uNzA0bDEuNDA4IDMuOTg3aC41ODNsMS40NzItMy45ODdoLS42NDd6TTU3LjY1MSAxMS4wMmgyLjQwN3YtLjU4MmgtMS43NnYtMS4xMmgxLjU4di0uNTgyaC0xLjU4di0xLjEyaDEuNzZ2LS41ODJINTcuNjV6TTYxLjM0NCA3LjAzNGgtLjY0NnYzLjk4N2gyLjI5di0uNTgzaC0xLjY0NHpNNjcuMjcgOS4zMThsLjA1OC41OS0xLjgxOC0yLjg3NGgtLjcwNHYzLjk4N2guNTlWNy45NjhsMS44NzQgMi45OTV2LjA1OGguNjQ3VjcuMDM0aC0uNjQ3ek03MS45NjIgNy41NThjLS40MS0uNDEtLjg4NC0uNTg4LTEuNDY2LS41ODgtLjU4OSAwLTEuMDU2LjE3Mi0xLjQ2Ni41ODgtLjQxLjQxLS41ODguODg0LS41ODggMS40NjYgMCAuNTg5LjE3OSAxLjA1Ni41ODggMS40NjYuNDEuNDEuODg0LjU4OCAxLjQ2Ni41ODguNTg5IDAgMS4wNTYtLjE3OSAxLjQ2Ni0uNTg4LjQxLS40MS41ODgtLjg4NC41ODgtMS40NjZzLS4yMy0xLjExNC0uNTg4LTEuNDY2em0tMS40NjYgMi45MzhjLS40MSAwLS43NjItLjExNS0uOTk4LS40MS0uMjM3LS4yOTQtLjQxLS42NDYtLjQxLTEuMDU2IDAtLjQxLjExNS0uODE5LjQxLTEuMDU2LjI5NC0uMjM2LjU4OC0uNDEuOTk4LS40MS40MSAwIC43NjIuMTE2Ljk5OC40MS4yOTUuMjk1LjQxLjY0Ny40MSAxLjA1NiAwIC40MS0uMTE1LjgyLS40MSAxLjA1Ni0uMjk0LjI4OC0uNTgyLjQxLS45OTguNDF6Ii8+PC9nPjxwYXRoIGQ9Ik0uMzI2LjA1OEMuMTIyLjI2OCAwIC42MDIgMCAxLjAzdjE1LjI1MmMwIC40MjguMTIyLjc2MS4zMjYuOTcybC4wNTIuMDQ1IDguNjQ2LTguNTQ0VjguNTVMLjM3OC4wMDYuMzI2LjA1OHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjIzMiA3LjIzMikiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJNMi44OCA1Ljk3MUwwIDMuMTE3di0uMjA1TDIuODg2LjA1OGwuMDY0LjAzOCAzLjQxOCAxLjkyYy45NzMuNTQ0Ljk3MyAxLjQ0NiAwIDEuOTlMMi45NSA1LjkyNmwtLjA3LjA0NXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjI1NiAxMi44NjQpIiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0iTTExLjY3NCAyLjkyNUw4LjcyNC4wMDYuMDEyIDguNjE0Yy4zMjYuMzQuODUxLjM3OCAxLjQ1My4wMzlsMTAuMjA4LTUuNzI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS41NTIgMTUuODcyKSIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGQ9Ik0xMS42NzQgNS45OUwxLjQ3Mi4yNTZDLjg3LS4wNzcuMzQ2LS4wMzguMDE5LjMwMWw4LjcwNCA4LjYwOCAyLjk1LTIuOTE5eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuNTUyIDYuOTc2KSIgZmlsbD0idXJsKCNkKSIvPjwvZz48L3N2Zz4='
            alt='google play logo'
          />
          <img
            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1IiBoZWlnaHQ9IjMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTUyLjUgMEgxMDV2MzJIMFYweiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGQ9Ik0xMDEuMjY1IDMySDMuNjc4QzEuNjUgMzIgMCAzMC4yOTggMCAyOC4yMTRWMy43OEMwIDEuNjk2IDEuNjUgMCAzLjY3OCAwaDk3LjU4N0MxMDMuMjkgMCAxMDUgMS42OTYgMTA1IDMuNzh2MjQuNDM0YzAgMi4wODQtMS43MSAzLjc4Ni0zLjczNSAzLjc4NiIgZmlsbD0iI0I1QjVCNSIgbWFzaz0idXJsKCNiKSIvPjwvZz48cGF0aCBkPSJNMTA0LjI0NyAyOC4yMTRjMCAxLjY5My0xLjMzMyAzLjA2NC0yLjk4MiAzLjA2NEgzLjY3OGMtMS42NDggMC0yLjk4Ni0xLjM3MS0yLjk4Ni0zLjA2NFYzLjc4Qy42OTIgMi4wODggMi4wMy43MTIgMy42NzguNzEyaDk3LjU4NmMxLjY1IDAgMi45ODMgMS4zNzYgMi45ODMgMy4wNjh2MjQuNDM0eiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0yMy40MzMgMTUuODI3Yy0uMDIzLTIuNTc4IDIuMDUyLTMuODMzIDIuMTQ3LTMuODkxLTEuMTc1LTEuNzYzLTIuOTk3LTIuMDA0LTMuNjM3LTIuMDIzLTEuNTMtLjE2NS0zLjAxNC45NDItMy43OTMuOTQyLS43OTUgMC0xLjk5NS0uOTI2LTMuMjg4LS44OTgtMS42NjQuMDI3LTMuMjIyIDEuMDE4LTQuMDc2IDIuNTU2LTEuNzYyIDMuMTM5LS40NDcgNy43NSAxLjI0IDEwLjI4OC44NDUgMS4yNDIgMS44MzIgMi42MyAzLjEyNCAyLjU4IDEuMjY0LS4wNTQgMS43MzUtLjgyOCAzLjI2MS0uODI4IDEuNTEyIDAgMS45NTUuODI4IDMuMjczLjc5NyAxLjM1Ni0uMDIzIDIuMjEtMS4yNDggMy4wMjUtMi41MDEuOTc2LTEuNDI0IDEuMzY4LTIuODI3IDEuMzg0LTIuODk5LS4wMzItLjAxMS0yLjYzNS0xLjAzMi0yLjY2LTQuMTIzTTIwLjk0NCA4LjI0NWMuNjgtLjg3NCAxLjE0NS0yLjA2NCAxLjAxNi0zLjI3MS0uOTg0LjA0NS0yLjIxNS42OTktMi45MjMgMS41NTUtLjYyNy43NTQtMS4xODcgMS45ODktMS4wNDMgMy4xNSAxLjEwNi4wODQgMi4yNC0uNTczIDIuOTUtMS40MzRNMzguNjk5IDIwLjc2NGwtLjg3Ni0yLjc4Yy0uMDkyLS4yODQtLjI2Ni0uOTUzLS41MjItMi4wMDZoLS4wMzFhODEuMDgxIDgxLjA4MSAwIDAxLS40OSAyLjAwNmwtLjg2MSAyLjc4aDIuNzh6bTMuMDI1IDQuNDRoLTEuNzY2bC0uOTY4LTMuMTI4aC0zLjM2M2wtLjkyMSAzLjEyN2gtMS43MmwzLjMzMi0xMC42NDZoMi4wNThsMy4zNDggMTAuNjQ2ek00OC42MDMgMjEuMzMzYzAtLjc0Ny0uMTYzLTEuMzYzLS40OTEtMS44NDgtLjM1OS0uNTA1LS44NC0uNzU5LTEuNDQ0LS43NTktLjQwOSAwLS43OC4xNDEtMS4xMTMuNDItLjMzMy4yNzktLjU1LjY0NC0uNjUyIDEuMDk4LS4wNTIuMjEtLjA3Ny4zODQtLjA3Ny41MnYxLjI4YzAgLjU1OC4xNjYgMS4wMy41IDEuNDE0LjMzMS4zODQuNzY0LjU3NiAxLjI5Ni41NzYuNjI1IDAgMS4xMTEtLjI0OCAxLjQ2LS43NDIuMzQ3LS40OTUuNTIxLTEuMTQ4LjUyMS0xLjk2bTEuNjktLjA2MmMwIDEuMzA2LS4zNDMgMi4zMzgtMS4wMyAzLjA5NmEyLjk2OSAyLjk2OSAwIDAxLTIuMjg3IDEuMDFjLS45ODMgMC0xLjY5LS4zNjItMi4xMi0xLjA5aC0uMDN2NC4wNDRoLTEuNjU4di04LjI3NmMwLS44MjEtLjAyMS0xLjY2NC0uMDYyLTIuNTI4aDEuNDU4bC4wOTMgMS4yMTdoLjAzYy41NTMtLjkxNyAxLjM5My0xLjM3NCAyLjUxOS0xLjM3NC44ODEgMCAxLjYxNS4zNTcgMi4yMDQgMS4wNzMuNTg5LjcxNy44ODMgMS42Ni44ODMgMi44MjhNNTcuMTg4IDIxLjMzM2MwLS43NDctLjE2NC0xLjM2My0uNDkyLTEuODQ4LS4zNTktLjUwNS0uODM5LS43NTktMS40NDMtLjc1OS0uNDEgMC0uNzgxLjE0MS0xLjExNC40Mi0uMzMzLjI3OS0uNTUuNjQ0LS42NTIgMS4wOTgtLjA1MS4yMS0uMDc3LjM4NC0uMDc3LjUydjEuMjhjMCAuNTU4LjE2NyAxLjAzLjQ5OCAxLjQxNC4zMzMuMzg0Ljc2Ni41NzYgMS4yOTkuNTc2LjYyNCAwIDEuMTEtLjI0OCAxLjQ1OC0uNzQyLjM0OC0uNDk1LjUyMy0xLjE0OC41MjMtMS45Nm0xLjY5LS4wNjJjMCAxLjMwNi0uMzQ1IDIuMzM4LTEuMDMgMy4wOTZhMi45NjggMi45NjggMCAwMS0yLjI4OSAxLjAxYy0uOTgyIDAtMS42OS0uMzYyLTIuMTE4LTEuMDloLS4wM3Y0LjA0NGgtMS42NTl2LTguMjc2YzAtLjgyMS0uMDIxLTEuNjY0LS4wNjEtMi41MjhoMS40NThsLjA5MiAxLjIxN2guMDNjLjU1NC0uOTE3IDEuMzkyLTEuMzc0IDIuNTItMS4zNzQuODc5IDAgMS42MTQuMzU3IDIuMjAzIDEuMDczLjU4OC43MTcuODgzIDEuNjYuODgzIDIuODI4TTY4LjQ3NSAyMi4yMThjMCAuOTA2LS4zMDYgMS42NDItLjkyIDIuMjExLS42NzQuNjIyLTEuNjEzLjkzMi0yLjgxOS45MzItMS4xMTMgMC0yLjAwNy0uMjIxLTIuNjgyLS42NjNsLjM4NC0xLjQyMmMuNzI4LjQ1MyAxLjUyNy42OCAyLjM5Ny42OC42MjQgMCAxLjExLS4xNDYgMS40Ni0uNDM2LjM0OC0uMjkuNTItLjY3OC41Mi0xLjE2MyAwLS40MzItLjE0MS0uNzk2LS40My0xLjA5Mi0uMjg1LS4yOTUtLjc2MS0uNTY5LTEuNDI2LS44MjMtMS44MTMtLjY5NS0yLjcxOS0xLjcxMy0yLjcxOS0zLjA1MyAwLS44NzUuMzE4LTEuNTkzLjk1My0yLjE1Mi42MzMtLjU1OCAxLjQ3OC0uODM4IDIuNTM0LS44MzguOTQyIDAgMS43MjQuMTY5IDIuMzQ4LjUwNWwtLjQxNCAxLjM5Yy0uNTg0LS4zMjYtMS4yNDMtLjQ5LTEuOTgxLS40OS0uNTg0IDAtMS4wNC4xNDgtMS4zNjYuNDQ0YTEuMjggMS4yOCAwIDAwLS40MTUuOTYzYzAgLjQyLjE1OC43NjkuNDc2IDEuMDQyLjI3Ni4yNTMuNzc4LjUyNyAxLjUwNS44MjIuODkuMzY5IDEuNTQ1LjggMS45NjYgMS4yOTQuNDE5LjQ5Ni42MjkgMS4xMTIuNjI5IDEuODQ5TTczLjk1NyAxOC44MDZINzIuMTN2My43MjdjMCAuOTQ4LjMyMiAxLjQyMy45NjkgMS40MjMuMjk1IDAgLjU0Mi0uMDI3LjczNi0uMDhsLjA0NSAxLjI5NmMtLjMyNi4xMjUtLjc1Ni4xODktMS4yOS4xODktLjY1NCAwLTEuMTY2LS4yMDUtMS41MzQtLjYxNi0uMzY4LS40MS0uNTUzLTEuMS0uNTUzLTIuMDd2LTMuODY5aC0xLjA5di0xLjI4aDEuMDl2LTEuNDA1bDEuNjI3LS41MDZ2MS45MTFoMS44Mjh2MS4yOHpNODAuNDgzIDIxLjM1N2MwLS43MDgtLjE0Ny0xLjMxNS0uNDQ1LTEuODIyLS4zNDgtLjYxMi0uODQ0LS45MTktMS40ODgtLjkxOS0uNjY4IDAtMS4xNzMuMzA3LTEuNTIuOTItLjI5OS41MDYtLjQ0NyAxLjEyMy0uNDQ3IDEuODUzIDAgLjcwOC4xNDggMS4zMTUuNDQ2IDEuODIuMzU5LjYxNC44Ni45MiAxLjUwNS45Mi42MzQgMCAxLjEzLS4zMTIgMS40ODktLjkzNC4zMDctLjUxOC40Ni0xLjEzLjQ2LTEuODM4bTEuNzIxLS4wNTVjMCAxLjE3OS0uMzI4IDIuMTQ4LS45ODMgMi45MDUtLjY4Ni43OC0xLjU5NyAxLjE3LTIuNzM0IDEuMTctMS4wOTUgMC0xLjk2Ny0uMzc0LTIuNjE3LTEuMTIyLS42NS0uNzQ4LS45NzYtMS42OS0uOTc2LTIuODI3IDAtMS4xOS4zMzUtMi4xNjQgMS4wMDYtMi45MjIuNjctLjc1OSAxLjU3NC0xLjEzNyAyLjcxLTEuMTM3IDEuMDk2IDAgMS45NzcuMzczIDIuNjQyIDEuMTIyLjYzNS43MjYuOTUzIDEuNjYzLjk1MyAyLjgxTTg3LjU5NCAxOS4wMjdhMi44MDIgMi44MDIgMCAwMC0uNTIyLS4wNDhjLS41ODQgMC0xLjAzNS4yMjgtMS4zNTIuNjgtLjI3Ny40LS40MTUuOTA2LS40MTUgMS41MTZ2NC4wMjhoLTEuNjU3bC4wMTUtNS4yNmMwLS44ODQtLjAyMS0xLjY5LS4wNjMtMi40MTZoMS40NDVsLjA2MSAxLjQ2OGguMDQ1Yy4xNzUtLjUwNC40NTEtLjkxLjgzLTEuMjE2YTEuOTcgMS45NyAwIDAxMS4xOTktLjQxYy4xNTMgMCAuMjkxLjAxLjQxNC4wMzF2MS42Mjd6TTkzLjQyOSAyMC41NmMuMDEtLjUwNi0uMDk3LS45NDMtLjMyMi0xLjMxMi0uMjg3LS40NzMtLjcyOC0uNzEtMS4zMjEtLjcxLS41NDMgMC0uOTg0LjIzMS0xLjMyMS42OTUtLjI3Ni4zNjktLjQ0LjgxLS40OSAxLjMyNmgzLjQ1NHptMS41ODEuNDQyYzAgLjMwNS0uMDIuNTYzLS4wNi43NzNoLTQuOTc1Yy4wMi43NTkuMjYgMS4zMzguNzIgMS43MzguNDIuMzU4Ljk2My41MzcgMS42MjguNTM3LjczNyAwIDEuNDA5LS4xMjEgMi4wMTMtLjM2M2wuMjYgMS4xODRjLS43MDcuMzE2LTEuNTQuNDc0LTIuNTAyLjQ3NC0xLjE1OCAwLTIuMDY2LS4zNS0yLjcyNy0xLjA1LS42Ni0uNy0uOTktMS42NC0uOTktMi44MiAwLTEuMTU4LjMwNi0yLjEyMi45MjEtMi44OS42NDUtLjgyMiAxLjUxNS0xLjIzMiAyLjYxLTEuMjMyIDEuMDc2IDAgMS44OS40MSAyLjQ0MyAxLjIzMS40NC42NTQuNjYgMS40Ni42NiAyLjQxOHpNMzYuNTA2IDkuMjY4YzAtLjMxLS4xMTgtLjU0Ni0uMzUzLS43MDYtLjIxMS0uMTQ0LS40OTEtLjIxNy0uODQxLS4yMTdoLS40OHYxLjgyNGMuMS4wMi4yNjQuMDMuNDk1LjAzLjM0NSAwIC42MTgtLjA3LjgxOC0uMjEuMjQxLS4xNi4zNi0uNC4zNi0uNzIxbS0uMTUtMi4zNTFjMC0uNTEyLS4zMy0uNzY4LS45OTEtLjc2OC0uMjMxIDAtLjQwOC4wMTUtLjUzMy4wNDZ2MS41MzdoLjUwM2MuMzE1IDAgLjU2NC0uMDc1Ljc0Ni0uMjI2YS43MjMuNzIzIDAgMDAuMjc1LS41OW0xLjAwMyAyLjM3NWMwIC40MjUtLjE1NC43NzYtLjQ2IDEuMDU2LS4zNTIuMzI2LS45NTYuNDg5LTEuODEuNDg5LS4zOTMgMC0uNzUtLjAyLTEuMDcyLS4wNjJWNS42MjlhNi4xOCA2LjE4IDAgMDExLjI2NS0uMTFjLjYyMiAwIDEuMDkyLjExNyAxLjQxLjM1LjMxOS4yMzMuNDc5LjU1My40NzkuOTYzIDAgLjI0OC0uMDc0LjQ3NC0uMjIuNjc4YTEuMjkxIDEuMjkxIDAgMDEtLjYxOC40NTV2LjAyM2MuMjg3LjA3Mi41MjMuMjEyLjcxLjQxOC4yMS4yNDQuMzE2LjUzOS4zMTYuODg1TTQwLjQ5NiA5LjQ5M3YtLjU4MmMtLjktLjAxNi0xLjM0OS4yMzgtMS4zNDkuNzYgMCAuMTk3LjA1Mi4zNDQuMTU3LjQ0M2EuNTU3LjU1NyAwIDAwLjM5Ny4xNDdjLjE4IDAgLjM0Ny0uMDU4LjUtLjE3NGEuNzE3LjcxNyAwIDAwLjI5NS0uNTk0bS44NDYgMS4yOTZoLS43MzJsLS4wNi0uNDM0aC0uMDIzYy0uMjUxLjM0Ni0uNjA4LjUyLTEuMDcxLjUyLS4zNDcgMC0uNjI3LS4xMTQtLjgzOC0uMzQyYTEuMDg4IDEuMDg4IDAgMDEtLjI4Ni0uNzY4YzAtLjQ2LjE4Ny0uODEyLjU2MS0xLjA1NS4zNzUtLjI0My45MDMtLjM2MyAxLjU4Mi0uMzU4di0uMDdjMC0uNDk2LS4yNTQtLjc0NC0uNzYxLS43NDQtLjM2MiAwLS42OC4wOTMtLjk1Ni4yNzlsLS4xNjYtLjU1MWMuMzQxLS4yMTcuNzYxLS4zMjYgMS4yNTgtLjMyNi45NiAwIDEuNDM4LjUyIDEuNDM4IDEuNTZWOS44OWMwIC4zNzguMDE5LjY3OC4wNTQuOU00Mi43MTQgMTAuNzg5aC44MTVWNy4wMThoLS44MTV2My43N3ptLjkwNi00Ljg5NmMwIC4xNS0uMDQ4LjI3MS0uMTQzLjM2NGEuNTA2LjUwNiAwIDAxLS4zNy4xNC40NTguNDU4IDAgMDEtLjM0My0uMTQzLjQ5Ni40OTYgMCAwMS0uMTQtLjM2MS40OC40OCAwIDAxLjE0NC0uMzU4LjQ4OC40ODggMCAwMS4zNTQtLjEzOS40ODIuNDgyIDAgMDEuNDk4LjQ5N3pNNDcuOTY2IDEwLjc4OWgtLjkyMWwtLjQ3NS0uNzkxYy0uMTA2LS4xNzYtLjIyMS0uMzg2LS4zNDctLjYyOWgtLjAxNmMtLjA3NC4xNS0uMTkuMzYtLjM0Ni42MjlsLS40NTIuNzkxaC0uODkxbDEuMjUyLTEuOTI1LTEuMjA3LTEuODQ2aC45MDVsLjQ2Ljc1M2MuMDkxLjE0NC4yMDUuMzQ0LjM0LjU5N2guMDIzYy4xMS0uMjIyLjIyMS0uNDI3LjMzMi0uNjEzbC40My0uNzM3aC44OWwtMS4yMTUgMS44MTYgMS4yMzggMS45NTV6TTUwLjg3NyA5LjQ5M3YtLjU4MmMtLjktLjAxNi0xLjM1LjIzOC0xLjM1Ljc2IDAgLjE5Ny4wNTMuMzQ0LjE1OC40NDNhLjU1OC41NTggMCAwMC4zOTcuMTQ3Yy4xOCAwIC4zNDYtLjA1OC40OTktLjE3NGEuNzEuNzEgMCAwMC4yODEtLjQ0Ni42MzYuNjM2IDAgMDAuMDE1LS4xNDhtLjg0NiAxLjI5NmgtLjczMmwtLjA2LS40MzRoLS4wMjNjLS4yNTIuMzQ2LS42MDkuNTItMS4wNzIuNTItLjM0NiAwLS42MjYtLjExNC0uODM3LS4zNDJhMS4wODggMS4wODggMCAwMS0uMjg2LS43NjhjMC0uNDYuMTg2LS44MTIuNTYxLTEuMDU1LjM3NS0uMjQzLjkwMi0uMzYzIDEuNTgxLS4zNTh2LS4wN2MwLS40OTYtLjI1My0uNzQ0LS43Ni0uNzQ0LS4zNjIgMC0uNjguMDkzLS45NTYuMjc5bC0uMTY2LS41NTFjLjM0LS4yMTcuNzYtLjMyNiAxLjI1OC0uMzI2Ljk1OSAwIDEuNDM5LjUyIDEuNDM5IDEuNTZWOS44OWMwIC4zNzguMDE4LjY3OC4wNTMuOU01NS4wMzQgNy43NTVhMS4zMTcgMS4zMTcgMCAwMC0uMjU2LS4wMjMuNzY1Ljc2NSAwIDAwLS42NjUuMzMzYy0uMTM0LjE5Ny0uMjAzLjQ0NS0uMjAzLjc0NXYxLjk3OWgtLjgxNWwuMDA4LTIuNTg0YzAtLjQzNS0uMDEtLjgzLS4wMy0xLjE4OGguNzA5bC4wMy43MjJoLjAyM2MuMDg1LS4yNDguMjItLjQ0Ny40MDctLjU5OGEuOTc1Ljk3NSAwIDAxLjU4OC0uMmMuMDc2IDAgLjE0NC4wMDQuMjA0LjAxNXYuNzk5ek02MS40NjIgMTAuNzg5aC0uODE1di0yLjE2YzAtLjY2Ni0uMjQ2LS45OTgtLjczOS0uOTk4YS43MjcuNzI3IDAgMDAtLjU4OS4yNzUuOTkuOTkgMCAwMC0uMjI2LjY0NnYyLjIzN2gtLjgxNVY4LjA5NmMwLS4zMzEtLjAxLS42OS0uMDMtMS4wNzhoLjcxN2wuMDM4LjU5aC4wMjJjLjA5NS0uMTg0LjIzNy0uMzM2LjQyMy0uNDU2LjIyLS4xNDEuNDY4LS4yMTIuNzM5LS4yMTIuMzQzIDAgLjYyNy4xMTQuODUzLjM0Mi4yODEuMjc5LjQyMi42OTUuNDIyIDEuMjQ5djIuMjU4ek02NC43OTcgOS40OTN2LS41ODJjLS45LS4wMTYtMS4zNS4yMzgtMS4zNS43NiAwIC4xOTcuMDUyLjM0NC4xNTcuNDQzYS41NTguNTU4IDAgMDAuMzk4LjE0N2MuMTggMCAuMzQ2LS4wNTguNDk4LS4xNzRhLjcxLjcxIDAgMDAuMjgyLS40NDYuNjM2LjYzNiAwIDAwLjAxNS0uMTQ4bS44NDUgMS4yOTZoLS43MzNsLS4wNi0uNDM0aC0uMDIyYy0uMjUxLjM0Ni0uNjA4LjUyLTEuMDcxLjUyLS4zNDcgMC0uNjI3LS4xMTQtLjgzOC0uMzQyYTEuMDg4IDEuMDg4IDAgMDEtLjI4Ni0uNzY4YzAtLjQ2LjE4Ny0uODEyLjU2Mi0xLjA1NS4zNzUtLjI0My45MDItLjM2MyAxLjU4LS4zNTh2LS4wN2MwLS40OTYtLjI1My0uNzQ0LS43Ni0uNzQ0LS4zNjEgMC0uNjguMDkzLS45NTYuMjc5bC0uMTY1LS41NTFjLjM0LS4yMTcuNzYtLjMyNiAxLjI1Ny0uMzI2Ljk2IDAgMS40NC41MiAxLjQ0IDEuNTZWOS44OWMwIC4zNzguMDE3LjY3OC4wNTIuOSIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4='
            alt='app store logo'
          />
        </div> */}
      </div>
      <div className={styles.images}>
        <img
          className={styles.image}
          src={cell}
          alt='CellPhone '
        />
      </div>
    </div>
  );
}
