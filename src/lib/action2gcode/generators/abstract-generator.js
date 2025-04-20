import XRegExp from 'xregexp';

// AbstractDriver class
class AbstractGenerator {
  // Class constructor...
  constructor(settings) {
    this.settings = settings;
  }

  postProcessRaster(gcode){
    // if (this.settings.gcodeToolOn && this.settings.gcodeToolOff){
    //   if (this.settings.gcodeToolOn.indexOf('$INTENSITY') > -1) {
    //     // FIXME in marlin mode this grabs the wrong intensity. the right one is in the line before the G1
    //     gcode = XRegExp.replace(gcode,new XRegExp("G0(.*?)G1(?:(.*?)("+(this.settings.gcodeLaserIntensity||'S')+"[0-9.]+))?","gis"), (_,m1,m2,m3) => {
    //       return 'G0'+m1+'\n'+this.settings.gcodeToolOn.split('$INTENSITY').join(m3)+'\nG1'+m2+m3 
    //     })
    //   } else {
    //     gcode = XRegExp.replace(gcode,new XRegExp("G0(.*?)G1","gis"),'G0$1\n'+this.settings.gcodeToolOn+'\nG1')
    //   }

    //   if (this.settings.gcodeToolOff.indexOf('$INTENSITY') > -1) {
    //     gcode = XRegExp.replace(gcode,new XRegExp("G1(.*?)G0(?:(.*?)("+(this.settings.gcodeLaserIntensity||'S')+"[0-9.]+))?","gis"), (_,m1,m2,m3) => {
    //       return 'G1'+m1+'\n'+this.settings.gcodeToolOff.split('$INTENSITY').join(m3)+'\nG0'+m2+m3
    //     })
    //   } else {
    //     gcode = XRegExp.replace(gcode,new XRegExp("G1(.*?)G0","gis"),'G1$1\n'+this.settings.gcodeToolOff+'\nG0')
    //   }
    // }
    return gcode;
  }

}
 
// Exports
export { AbstractGenerator }
export default AbstractGenerator
