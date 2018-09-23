export const isValidDevice = (device) => {
  if (!device.system_name) {
    alert('Please enter a system name');
    return false;
  }
  else if (!device.type) {
    alert('Please select a device type');
    return false;
  }
  else if (!device.hdd_capacity) {
    alert('Please enter HDD capacity');
    return false;
  }
  else {
    return true;
  }
}