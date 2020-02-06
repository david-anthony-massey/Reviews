<Grid
  columns={"240px 240px 240px 240px 240px 240px"}
  justifyContent="start"
  areas={[
    "matt-comp matt-comp matt-comp matt-comp matt-comp matt-comp",
    "tay-comp tay-comp roy-comp roy-comp travis-comp travis-comp",
    "david-comp david-comp david-comp david-comp david-comp david-comp",
    "mark-comp mark-comp mark-comp mark-comp mark-comp mark-comp"
  ]}
>
  <Cell
    middle
    style={{ display: "flex", verticalAlign: "middle" }}
    area="matt-comp"
  >
    <MattComp />
  </Cell>
  <Cell
    middle
    style={{ display: "flex", verticalAlign: "middle" }}
    area="tay-comp"
  >
    <TayComp />
  </Cell>
  <Cell
    middle
    style={{ display: "flex", verticalAlign: "middle" }}
    area="roy-comp"
  >
    <RoyComp />
  </Cell>
  <Cell
    middle
    style={{ display: "flex", verticalAlign: "middle" }}
    area="travis-comp"
  >
    <TravisComp />
  </Cell>
  <Cell
    middle
    style={{ display: "flex", verticalAlign: "middle" }}
    area="david-comp"
  >
    <DavidComp />
  </Cell>
  <Cell
    middle
    style={{ display: "flex", verticalAlign: "middle" }}
    area="mark-comp"
  >
    <MarkComp />
  </Cell>
</Grid>;
