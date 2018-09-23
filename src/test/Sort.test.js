import { sort } from '../methods';

const arr = [
  {
    "id": "e8okoP2l5",
    "system_name": "DESKTOP-SMART",
    "type": "WINDOWS_WORKSTATION",
    "hdd_capacity": "10"
  },
  {
    "id": "Th3ngERn9",
    "system_name": "MAC-LEADER",
    "type": "MAC",
    "hdd_capacity": "2048"
  },
  {
    "id": "Q1JdBnE12",
    "system_name": "ARMANDO-SERVER",
    "type": "WINDOWS_SERVER",
    "hdd_capacity": "256"
  },
  {
    "id": "e7ocoQ2n3",
    "system_name": "MIGUEL-PC",
    "type": "WINDOWS_WORKSTATION",
    "hdd_capacity": "500"
  },
  {
    "id": "Jj5bn3G2H",
    "system_name": "FIRST-MAC",
    "type": "MAC",
    "hdd_capacity": "180"
  }
];

const hdd_capacity_result = [
  {
    "id": "e8okoP2l5",
    "system_name": "DESKTOP-SMART",
    "type": "WINDOWS_WORKSTATION",
    "hdd_capacity": "10"
  },
  {
    "id": "Jj5bn3G2H",
    "system_name": "FIRST-MAC",
    "type": "MAC",
    "hdd_capacity": "180"
  },
  {
    "id": "Q1JdBnE12",
    "system_name": "ARMANDO-SERVER",
    "type": "WINDOWS_SERVER",
    "hdd_capacity": "256"
  },
  {
    "id": "e7ocoQ2n3",
    "system_name": "MIGUEL-PC",
    "type": "WINDOWS_WORKSTATION",
    "hdd_capacity": "500"
  },
  {
    "id": "Th3ngERn9",
    "system_name": "MAC-LEADER",
    "type": "MAC",
    "hdd_capacity": "2048"
  },
];

const system_name_result = [
  {
    "id": "Q1JdBnE12",
    "system_name": "ARMANDO-SERVER",
    "type": "WINDOWS_SERVER",
    "hdd_capacity": "256"
  },
  {
    "id": "e8okoP2l5",
    "system_name": "DESKTOP-SMART",
    "type": "WINDOWS_WORKSTATION",
    "hdd_capacity": "10"
  },
  {
    "id": "Jj5bn3G2H",
    "system_name": "FIRST-MAC",
    "type": "MAC",
    "hdd_capacity": "180"
  },
  {
    "id": "Th3ngERn9",
    "system_name": "MAC-LEADER",
    "type": "MAC",
    "hdd_capacity": "2048"
  },
  {
    "id": "e7ocoQ2n3",
    "system_name": "MIGUEL-PC",
    "type": "WINDOWS_WORKSTATION",
    "hdd_capacity": "500"
  }
];

test('sorts array by hdd capacity', () => {
  expect(sort(arr, 'hdd_capacity')).toEqual(hdd_capacity_result);
});

test('sorts array by system name', () => {
  expect(sort(arr, 'system_name')).toEqual(system_name_result);
});