import assert from 'assert/strict';
import test from 'node:test';
import Map from '../../src/entities/map.js';
import SpaceProbe from '../../src/entities/space-probe.js';
import MoveSpaceProbeService from "../../src/services/move-space-probe-service.js";

const map = new Map(5 ,5)

test('if return 1 3 N when start at 1 2 N and send commands LMLMLMLMM', () => {
  const spaceProbe = new SpaceProbe('N', map.getCoordinatesIndex(1, 2))
  const moveSpaceProbeService = new MoveSpaceProbeService(map, spaceProbe)

  const actions = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
  const { coordinates, direction } = moveSpaceProbeService.execute({ actions })
  assert.deepEqual(coordinates, [1, 3])
  assert.deepEqual(direction, 'N')
})

test('if return 5 1 E when start at 3 3 E and send commands MMRMMRMRRM', () => {
  const spaceProbe = new SpaceProbe('E', map.getCoordinatesIndex(3, 3))
  const moveSpaceProbeService = new MoveSpaceProbeService(map, spaceProbe)

  const actions = ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']
  const { coordinates, direction } = moveSpaceProbeService.execute({ actions })
  assert.deepEqual(coordinates, [5, 1])
  assert.deepEqual(direction, 'E')
})
