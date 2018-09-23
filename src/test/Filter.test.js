import { filter } from '../methods';

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

const type_MAC_result = [
  {
    "id": "Th3ngERn9",
    "system_name": "MAC-LEADER",
    "type": "MAC",
    "hdd_capacity": "2048"
  },
  {
    "id": "Jj5bn3G2H",
    "system_name": "FIRST-MAC",
    "type": "MAC",
    "hdd_capacity": "180"
  }
];

const type_WINDOWS_WORKSTATION_result = [
  {
    "id": "e8okoP2l5",
    "system_name": "DESKTOP-SMART",
    "type": "WINDOWS_WORKSTATION",
    "hdd_capacity": "10"
  },
  {
    "id": "e7ocoQ2n3",
    "system_name": "MIGUEL-PC",
    "type": "WINDOWS_WORKSTATION",
    "hdd_capacity": "500"
  },
];

const type_WINDOWS_SERVER_result = [
  {
    "id": "Q1JdBnE12",
    "system_name": "ARMANDO-SERVER",
    "type": "WINDOWS_SERVER",
    "hdd_capacity": "256"
  },
];

test('filters array by type MAC', () => {
  expect(filter(arr, 'type', 'MAC')).toEqual(type_MAC_result);
});

test('filters array by type WINDOWS_WORKSTATION', () => {
  expect(filter(arr, 'type', 'WINDOWS_WORKSTATION')).toEqual(type_WINDOWS_WORKSTATION_result);
});

test('filters array by type WINDOWS_SERVER', () => {
  expect(filter(arr, 'type', 'WINDOWS_SERVER')).toEqual(type_WINDOWS_SERVER_result);
});