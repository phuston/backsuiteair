import React, { Component } from 'react';
import './JetBlue.css';
import { Form, Icon, Input, Button, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class JetBlue extends Component {

  render() {
    return (
      <div id="DIV_1">
      <div id="DIV_2">
        <div id="DIV_3">
          <h2 id="H2_4">
            Boston, MA <span id="SPAN_5">(BOS)</span> to San Francisco, CA <span id="SPAN_6">(SFO)</span>
          </h2>
        </div>
      </div>
      <div id="DIV_7">
        {/* <!-- Calendar Tabs begin --> */}
    
        <div id="DIV_8">
          <table id="TABLE_9">
            <tbody id="TBODY_10">
              <tr id="TR_11">
                <td id="TD_12">
                   <a href="#" id="A_13">Previous Week</a>
                </td>
                <td id="TD_14">
                  <table id="TABLE_15">
                    <tbody id="TBODY_16">
                      <tr id="TR_17">
                        <td id="TD_18">
                          <div id="DIV_19">
                            <div id="DIV_20">
                               <span id="SPAN_21">Mon Apr 2</span><br id="BR_22" /> <span id="SPAN_23">$461</span>
                            </div>
                          </div>
                        </td>
                        <td id="TD_24">
                          <div id="DIV_25">
                            <div id="DIV_26">
                               <span id="SPAN_27">Tue Apr 3</span><br id="BR_28" /> <span id="SPAN_29">$406</span>
                            </div>
                          </div>
                        </td>
                        <td id="TD_30">
                          <div id="DIV_31">
                            <div id="DIV_32">
                               <span id="SPAN_33">Selected</span> <span id="SPAN_34">Wed Apr 4</span><br id="BR_35" /> <span id="SPAN_36">from $399</span>
                            </div>
                          </div>
                        </td>
                        <td id="TD_37">
                          <div id="DIV_38">
                            <div id="DIV_39">
                               <span id="SPAN_40">Thu Apr 5</span><br id="BR_41" /> <span id="SPAN_42">$349</span>
                            </div>
                          </div>
                        </td>
                        <td id="TD_43">
                          <div id="DIV_44">
                            <div id="DIV_45">
                               <span id="SPAN_46">Fri Apr 6</span><br id="BR_47" /> <span id="SPAN_48">$349</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td id="TD_50">
                     <a href="#" id="A_51">Next Week</a>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Calendar Tabs end -->
    
        
        <!-- Results Area begin --> */}
    
        <input type="hidden" name="flightItineraryId[0]" id="INPUT_580" />
        <div id="DIV_581">
              Outbound flight results updated
            </div>
        <div id="DIV_582">
              <table id="TABLE_583">
                 
                <caption id="CAPTION_584">
                   <span id="SPAN_585">Departing flights Boston, MA <span id="SPAN_586">(BOS)</span> - San Francisco, CA <span id="SPAN_587">(SFO)</span>. The information in this table describes flight details, fare bundles and pricing information for each flight. Flight details contain departure and arrival locations, times and flight numbers. Fare bundles are grouping of fares that give a clear choice of service and price between one fare bundle and another. You can hear a full comparison between fare bundles by selecting the 'Compare fare options' feature.</span>
                </caption>
                <thead id="THEAD_588">
                  <tr id="TR_589">
                    <td id="TD_590">
                      <div id="DIV_591">
                        Departs<a id="A_592" tabindex="0"><span id="SPAN_593"></span></a>
                      </div>
                    </td>
                    <td id="TD_594">
                      <div id="DIV_595">
                        Arrives<a id="A_596" tabindex="0"><span id="SPAN_597"></span></a>
                      </div>
                    </td>
                    <td id="TD_598">
                      <div id="DIV_599">
                        Duration<a id="A_600" tabindex="0"><span id="SPAN_601"></span></a>
                      </div>
                    </td>
                    <td id="TD_602">
                      <div id="DIV_603">
                         <span id="SPAN_604">Blue</span><span id="SPAN_605"></span>
                        <ul id="UL_606">
                          <li id="LI_607">
                             <a href="#" id="A_608"><span id="SPAN_609">bags included:</span> 0</a>
                          </li>
                        </ul> <a id="A_610" tabindex="0"><span id="SPAN_611"></span></a>
                      </div>
                    </td>
                    <td id="TD_612">
                      <div id="DIV_613">
                         <span id="SPAN_614">Blue Plus</span><span id="SPAN_615"></span>
                        <ul id="UL_616">
                          <li id="LI_617">
                             <a href="#" id="A_618"><span id="SPAN_619">bags included:</span> 1</a>
                          </li>
                        </ul> <a id="A_620" tabindex="0"><span id="SPAN_621"></span></a>
                      </div>
                    </td>
                    <td id="TD_622">
                      <div id="DIV_623">
                         <span id="SPAN_624">Blue Flex</span><span id="SPAN_625"></span>
                        <ul id="UL_626">
                          <li id="LI_627">
                             <a href="#" id="A_628"><span id="SPAN_629">bags included:</span> 2</a>
                          </li>
                        </ul> <a id="A_630" tabindex="0"><span id="SPAN_631"></span></a>
                      </div>
                    </td>
                    <td id="TD_632">
                      <div id="DIV_633">
                         <span id="SPAN_634">Mint</span><span id="SPAN_635"></span>
                        <ul id="UL_636">
                          <li id="LI_637">
                             <a href="#" id="A_638"><span id="SPAN_639">bags included:</span> 2</a>
                          </li>
                        </ul> <a id="A_640" tabindex="0"><span id="SPAN_641"></span></a>
                      </div>
                    </td>
                    <td id="TD_642">
                      <div id="DIV_643">
                         <span id="SPAN_644">Blue</span><span id="SPAN_645"></span>
                        <ul id="UL_646">
                          <li id="LI_647">
                             <a href="#" id="A_648"><span id="SPAN_649">bags included:</span> 0</a>
                          </li>
                        </ul> <a id="A_650" tabindex="0"><span id="SPAN_651"></span></a>
                      </div>
                    </td>
                    <td id="TD_652">
                      <div id="DIV_653">
                         <span id="SPAN_654">Blue Plus</span><span id="SPAN_655"></span>
                        <ul id="UL_656">
                          <li id="LI_657">
                             <a href="#" id="A_658"><span id="SPAN_659">bags included:</span> 1</a>
                          </li>
                        </ul> <a id="A_660" tabindex="0"><span id="SPAN_661"></span></a>
                      </div>
                    </td>
                    <td id="TD_662">
                      <div id="DIV_663">
                         <span id="SPAN_664">Blue Flex</span><span id="SPAN_665"></span>
                        <ul id="UL_666">
                          <li id="LI_667">
                             <a href="#" id="A_668"><span id="SPAN_669">bags included:</span> 2</a>
                          </li>
                        </ul> <a id="A_670" tabindex="0"><span id="SPAN_671"></span></a>
                      </div>
                    </td>
                    <td id="TD_672">
                      <div id="DIV_673">
                         <span id="SPAN_674">Mint</span><span id="SPAN_675"></span>
                        <ul id="UL_676">
                          <li id="LI_677">
                             <a href="#" id="A_678"><span id="SPAN_679">bags included:</span> 2</a>
                          </li>
                        </ul> <a id="A_680" tabindex="0"><span id="SPAN_681"></span></a>
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody id="TBODY_682">
                  <tr id="TR_683">
                    <td id="TD_684">
                      <div id="DIV_685">
                        <div id="DIV_686">
                          6:34 AM
                        </div>
                        <div id="DIV_687">
                          BOS
                          <div id="DIV_688">
                            <div id="DIV_689">
                               <b id="B_690">Boston, MA <span id="SPAN_691">(BOS)</span></b>
                            </div>
                          </div>
                        </div>
                        <div id="DIV_692">
                           <span id="SPAN_693"> <span id="SPAN_694"><a href="#" id="A_695"><span id="SPAN_696">Flight number</span> 133</a></span><span id="SPAN_697"></span> <span id="SPAN_698"><span id="SPAN_699"><span id="SPAN_700">Aircraft</span> A321/Mint</span></span><span id="SPAN_701"></span></span>
                          <div id="DIV_702">
                            Airbus A321: Flight 133 <span id="SPAN_703">Boston, MA <span id="SPAN_704">(BOS)</span> to San Francisco, CA <span id="SPAN_705">(SFO)</span></span>
                          </div> <a href="#" id="A_706">View seats</a> <span id="SPAN_707"><a href="#" id="A_708">Amenities <span id="SPAN_709">for flight null</span></a></span>
                        </div>
                      </div>
                    </td>
                    <td id="TD_710">
                      <div id="DIV_711">
                        10:19 AM
                      </div>
                      <div id="DIV_712">
                        SFO
                        <div id="DIV_713">
                          <div id="DIV_714">
                             <b id="B_715">San Francisco, CA <span id="SPAN_716">(SFO)</span></b>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td id="TD_717">
                      <div id="DIV_718">
                        6h 45m
                      </div>
                    </td>
                    <td id="TD_719" rowspan="1">
                      <div id="DIV_720">
                        <table id="TABLE_721">
                          <tbody id="TBODY_722">
                            <tr id="TR_723">
                              <td id="TD_724">
                                <div id="DIV_725">
                                  <input type="radio" name="flightItineraryGroupId[0]_00" value="7" id="INPUT_726" />
                                </div>
                              </td>
                              <td id="TD_727">
                                <div id="DIV_728">
                                   
                                  <label for="flightSelectGr_0_7" id="LABEL_729">
                                    $399
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_730">
                        </div><span id="SPAN_731"></span>
                      </div>
                    </td>
                    <td id="TD_732" rowspan="1">
                      <div id="DIV_733">
                        <table id="TABLE_734">
                          <tbody id="TBODY_735">
                            <tr id="TR_736">
                              <td id="TD_737">
                                <div id="DIV_738">
                                  <input type="radio" name="flightItineraryGroupId[0]_00" value="6" id="INPUT_739" />
                                </div>
                              </td>
                              <td id="TD_740">
                                <div id="DIV_741">
                                   
                                  <label for="flightSelectGr_0_6" id="LABEL_742">
                                    $422
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_743">
                        </div><span id="SPAN_744"></span>
                      </div>
                    </td>
                    <td id="TD_745" rowspan="1">
                      <div id="DIV_746">
                        <table id="TABLE_747">
                          <tbody id="TBODY_748">
                            <tr id="TR_749">
                              <td id="TD_750">
                                <div id="DIV_751">
                                  <input type="radio" name="flightItineraryGroupId[0]_00" value="5" id="INPUT_752" />
                                </div>
                              </td>
                              <td id="TD_753">
                                <div id="DIV_754">
                                   
                                  <label for="flightSelectGr_0_5" id="LABEL_755">
                                    $499
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_756">
                        </div><span id="SPAN_757"></span>
                      </div>
                    </td>
                    <td id="TD_758" rowspan="1">
                      <div id="DIV_759">
                        <table id="TABLE_760">
                          <tbody id="TBODY_761">
                            <tr id="TR_762">
                              <td id="TD_763">
                                <div id="DIV_764">
                                  <input type="radio" name="flightItineraryGroupId[0]_00" value="4" id="INPUT_765" />
                                </div>
                              </td>
                              <td id="TD_766">
                                <div id="DIV_767">
                                   
                                  <label for="flightSelectGr_0_4" id="LABEL_768">
                                    $499
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_769">
                          <div id="DIV_770">
                             <b id="B_771">2 seats</b> left at this price
                          </div>
                        </div><span id="SPAN_772"></span>
                      </div>
                    </td>
                    <td id="TD_773" rowspan="1">
                      <div id="DIV_774">
                        <table id="TABLE_775">
                          <tbody id="TBODY_776">
                            <tr id="TR_777">
                              <td id="TD_778">
                                <div id="DIV_779">
                                  <input type="radio" name="flightItineraryGroupId[0]_10" value="3" id="INPUT_780" />
                                </div>
                              </td>
                              <td id="TD_781">
                                <div id="DIV_782">
                                   
                                  <label for="flightSelectGr_0_3" id="LABEL_783">
                                    $599
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_784">
                        </div><span id="SPAN_785"></span>
                      </div>
                    </td>
                    <td id="TD_786" rowspan="1">
                      <div id="DIV_787">
                        <table id="TABLE_788">
                          <tbody id="TBODY_789">
                            <tr id="TR_790">
                              <td id="TD_791">
                                <div id="DIV_792">
                                  <input type="radio" name="flightItineraryGroupId[0]_10" value="2" id="INPUT_793" />
                                </div>
                              </td>
                              <td id="TD_794">
                                <div id="DIV_795">
                                   
                                  <label for="flightSelectGr_0_2" id="LABEL_796">
                                    $622
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_797">
                        </div><span id="SPAN_798"></span>
                      </div>
                    </td>
                    <td id="TD_799" rowspan="1">
                      <div id="DIV_800">
                        <table id="TABLE_801">
                          <tbody id="TBODY_802">
                            <tr id="TR_803">
                              <td id="TD_804">
                                <div id="DIV_805">
                                  <input type="radio" name="flightItineraryGroupId[0]_10" value="1" id="INPUT_806" />
                                </div>
                              </td>
                              <td id="TD_807">
                                <div id="DIV_808">
                                   
                                  <label for="flightSelectGr_0_1" id="LABEL_809">
                                    $699
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_810">
                        </div><span id="SPAN_811"></span>
                      </div>
                    </td>
                    <td id="TD_812" rowspan="1">
                      <div id="DIV_813">
                        <table id="TABLE_814">
                          <tbody id="TBODY_815">
                            <tr id="TR_816">
                              <td id="TD_817">
                                <div id="DIV_818">
                                  <input type="radio" name="flightItineraryGroupId[0]_10" value="0" id="INPUT_819" />
                                </div>
                              </td>
                              <td id="TD_820">
                                <div id="DIV_821">
                                   
                                  <label for="flightSelectGr_0_0" id="LABEL_822">
                                    $1,249
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_823">
                          <div id="DIV_824">
                             <b id="B_825">5 seats</b> left at this price
                          </div>
                        </div><span id="SPAN_826"></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                
                <tbody id="TBODY_827">
                  <tr id="TR_828">
                    <td id="TD_829">
                      <div id="DIV_830">
                        <div id="DIV_831">
                          11:37 AM
                        </div>
                        <div id="DIV_832">
                          BOS
                          <div id="DIV_833">
                            <div id="DIV_834">
                               <b id="B_835">Boston, MA <span id="SPAN_836">(BOS)</span></b>
                            </div>
                          </div>
                        </div>
                        <div id="DIV_837">
                           <span id="SPAN_838"> <span id="SPAN_839"><a href="#" id="A_840"><span id="SPAN_841">Flight number</span> 1833</a></span><span id="SPAN_842"></span> <span id="SPAN_843"><span id="SPAN_844"><span id="SPAN_845">Aircraft</span> A321/Mint</span></span><span id="SPAN_846"></span></span>
                          <div id="DIV_847">
                            Airbus A321: Flight 1833 <span id="SPAN_848">Boston, MA <span id="SPAN_849">(BOS)</span> to San Francisco, CA <span id="SPAN_850">(SFO)</span></span>
                          </div> <a href="#" id="A_851">View seats</a> <span id="SPAN_852"><a href="#" id="A_853">Amenities <span id="SPAN_854">for flight null</span></a></span>
                        </div>
                      </div>
                    </td>
                    <td id="TD_855">
                      <div id="DIV_856">
                        3:25 PM
                      </div>
                      <div id="DIV_857">
                        SFO
                        <div id="DIV_858">
                          <div id="DIV_859">
                             <b id="B_860">San Francisco, CA <span id="SPAN_861">(SFO)</span></b>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td id="TD_862">
                      <div id="DIV_863">
                        6h 48m
                      </div>
                    </td>
                    <td id="TD_864" rowspan="1">
                      <div id="DIV_865">
                        <table id="TABLE_866">
                          <tbody id="TBODY_867">
                            <tr id="TR_868">
                              <td id="TD_869">
                                <div id="DIV_870">
                                  <input type="radio" name="flightItineraryGroupId[0]_01" value="16" id="INPUT_871" />
                                </div>
                              </td>
                              <td id="TD_872">
                                <div id="DIV_873">
                                   
                                  <label for="flightSelectGr_0_16" id="LABEL_874">
                                    $399
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_875">
                        </div><span id="SPAN_876"></span>
                      </div>
                    </td>
                    <td id="TD_877" rowspan="1">
                      <div id="DIV_878">
                        <table id="TABLE_879">
                          <tbody id="TBODY_880">
                            <tr id="TR_881">
                              <td id="TD_882">
                                <div id="DIV_883">
                                  <input type="radio" name="flightItineraryGroupId[0]_01" value="15" id="INPUT_884" />
                                </div>
                              </td>
                              <td id="TD_885">
                                <div id="DIV_886">
                                   
                                  <label for="flightSelectGr_0_15" id="LABEL_887">
                                    $422
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_888">
                        </div><span id="SPAN_889"></span>
                      </div>
                    </td>
                    <td id="TD_890" rowspan="1">
                      <div id="DIV_891">
                        <table id="TABLE_892">
                          <tbody id="TBODY_893">
                            <tr id="TR_894">
                              <td id="TD_895">
                                <div id="DIV_896">
                                  <input type="radio" name="flightItineraryGroupId[0]_01" value="14" id="INPUT_897" />
                                </div>
                              </td>
                              <td id="TD_898">
                                <div id="DIV_899">
                                   
                                  <label for="flightSelectGr_0_14" id="LABEL_900">
                                    $499
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_901">
                        </div><span id="SPAN_902"></span>
                      </div>
                    </td>
                    <td id="TD_903" rowspan="1">
                      <div id="DIV_904">
                        <table id="TABLE_905">
                          <tbody id="TBODY_906">
                            <tr id="TR_907">
                              <td id="TD_908">
                                <div id="DIV_909">
                                  <input type="radio" name="flightItineraryGroupId[0]_01" value="11" id="INPUT_910" />
                                </div>
                              </td>
                              <td id="TD_911">
                                <div id="DIV_912">
                                   
                                  <label for="flightSelectGr_0_11" id="LABEL_913">
                                    $649
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_914">
                          <div id="DIV_915">
                             <b id="B_916">1 seat</b> left at this price
                          </div>
                        </div><span id="SPAN_917"></span>
                      </div>
                    </td>
                    <td id="TD_918" rowspan="1">
                      <div id="DIV_919">
                        <table id="TABLE_920">
                          <tbody id="TBODY_921">
                            <tr id="TR_922">
                              <td id="TD_923">
                                <div id="DIV_924">
                                  <input type="radio" name="flightItineraryGroupId[0]_11" value="13" id="INPUT_925" />
                                </div>
                              </td>
                              <td id="TD_926">
                                <div id="DIV_927">
                                   
                                  <label for="flightSelectGr_0_13" id="LABEL_928">
                                    $599
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_929">
                        </div><span id="SPAN_930"></span>
                      </div>
                    </td>
                    <td id="TD_931" rowspan="1">
                      <div id="DIV_932">
                        <table id="TABLE_933">
                          <tbody id="TBODY_934">
                            <tr id="TR_935">
                              <td id="TD_936">
                                <div id="DIV_937">
                                  <input type="radio" name="flightItineraryGroupId[0]_11" value="12" id="INPUT_938" />
                                </div>
                              </td>
                              <td id="TD_939">
                                <div id="DIV_940">
                                   
                                  <label for="flightSelectGr_0_12" id="LABEL_941">
                                    $622
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_942">
                        </div><span id="SPAN_943"></span>
                      </div>
                    </td>
                    <td id="TD_944" rowspan="1">
                      <div id="DIV_945">
                        <table id="TABLE_946">
                          <tbody id="TBODY_947">
                            <tr id="TR_948">
                              <td id="TD_949">
                                <div id="DIV_950">
                                  <input type="radio" name="flightItineraryGroupId[0]_11" value="10" id="INPUT_951" />
                                </div>
                              </td>
                              <td id="TD_952">
                                <div id="DIV_953">
                                   
                                  <label for="flightSelectGr_0_10" id="LABEL_954">
                                    $699
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_955">
                        </div><span id="SPAN_956"></span>
                      </div>
                    </td>
                    <td id="TD_957" rowspan="1">
                      <div id="DIV_958">
                        <table id="TABLE_959">
                          <tbody id="TBODY_960">
                            <tr id="TR_961">
                              <td id="TD_962">
                                <div id="DIV_963">
                                  <input type="radio" name="flightItineraryGroupId[0]_11" value="9" id="INPUT_964" />
                                </div>
                              </td>
                              <td id="TD_965">
                                <div id="DIV_966">
                                   
                                  <label for="flightSelectGr_0_9" id="LABEL_967">
                                    $1,249
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_968">
                        </div><span id="SPAN_969"></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody id="TBODY_970">
                  <tr id="TR_971">
                    <td id="TD_972">
                      <div id="DIV_973">
                        <div id="DIV_974">
                          3:37 PM
                        </div>
                        <div id="DIV_975">
                          BOS
                          <div id="DIV_976">
                            <div id="DIV_977">
                               <b id="B_978">Boston, MA <span id="SPAN_979">(BOS)</span></b>
                            </div>
                          </div>
                        </div>
                        <div id="DIV_980">
                           <span id="SPAN_981"> <span id="SPAN_982"><a href="#" id="A_983"><span id="SPAN_984">Flight number</span> 633</a></span><span id="SPAN_985"></span> <span id="SPAN_986"><span id="SPAN_987"><span id="SPAN_988">Aircraft</span> A321/Mint</span></span><span id="SPAN_989"></span></span>
                          <div id="DIV_990">
                            Airbus A321: Flight 633 <span id="SPAN_991">Boston, MA <span id="SPAN_992">(BOS)</span> to San Francisco, CA <span id="SPAN_993">(SFO)</span></span>
                          </div> <a href="#" id="A_994">View seats</a> <span id="SPAN_995"><a href="#" id="A_996">Amenities <span id="SPAN_997">for flight null</span></a></span>
                        </div>
                      </div>
                    </td>
                    <td id="TD_998">
                      <div id="DIV_999">
                        7:20 PM
                      </div>
                      <div id="DIV_1000">
                        SFO
                        <div id="DIV_1001">
                          <div id="DIV_1002">
                             <b id="B_1003">San Francisco, CA <span id="SPAN_1004">(SFO)</span></b>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td id="TD_1005">
                      <div id="DIV_1006">
                        6h 43m
                      </div>
                    </td>
                    <td id="TD_1007" rowspan="1">
                      <div id="DIV_1008">
                        <table id="TABLE_1009">
                          <tbody id="TBODY_1010">
                            <tr id="TR_1011">
                              <td id="TD_1012">
                                <div id="DIV_1013">
                                  <input type="radio" name="flightItineraryGroupId[0]_02" value="24" id="INPUT_1014" />
                                </div>
                              </td>
                              <td id="TD_1015">
                                <div id="DIV_1016">
                                   
                                  <label for="flightSelectGr_0_24" id="LABEL_1017">
                                    $399
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_1018">
                          <div id="DIV_1019">
                             <b id="B_1020">1 seat</b> left at this price
                          </div>
                        </div><span id="SPAN_1021"></span>
                      </div>
                    </td>
                    <td id="TD_1022" rowspan="1">
                      <div id="DIV_1023">
                        <table id="TABLE_1024">
                          <tbody id="TBODY_1025">
                            <tr id="TR_1026">
                              <td id="TD_1027">
                                <div id="DIV_1028">
                                  <input type="radio" name="flightItineraryGroupId[0]_02" value="23" id="INPUT_1029" />
                                </div>
                              </td>
                              <td id="TD_1030">
                                <div id="DIV_1031">
                                   
                                  <label for="flightSelectGr_0_23" id="LABEL_1032">
                                    $422
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_1033">
                          <div id="DIV_1034">
                             <b id="B_1035">1 seat</b> left at this price
                          </div>
                        </div><span id="SPAN_1036"></span>
                      </div>
                    </td>
                    <td id="TD_1037" rowspan="1">
                      <div id="DIV_1038">
                        <table id="TABLE_1039">
                          <tbody id="TBODY_1040">
                            <tr id="TR_1041">
                              <td id="TD_1042">
                                <div id="DIV_1043">
                                  <input type="radio" name="flightItineraryGroupId[0]_02" value="22" id="INPUT_1044" />
                                </div>
                              </td>
                              <td id="TD_1045">
                                <div id="DIV_1046">
                                   
                                  <label for="flightSelectGr_0_22" id="LABEL_1047">
                                    $499
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_1048">
                          <div id="DIV_1049">
                             <b id="B_1050">1 seat</b> left at this price
                          </div>
                        </div><span id="SPAN_1051"></span>
                      </div>
                    </td>
                    <td id="TD_1052" rowspan="1">
                      <div id="DIV_1053">
                        <table id="TABLE_1054">
                          <tbody id="TBODY_1055">
                            <tr id="TR_1056">
                              <td id="TD_1057">
                                <div id="DIV_1058">
                                  <input type="radio" name="flightItineraryGroupId[0]_02" value="19" id="INPUT_1059" />
                                </div>
                              </td>
                              <td id="TD_1060">
                                <div id="DIV_1061">
                                   
                                  <label for="flightSelectGr_0_19" id="LABEL_1062">
                                    $649
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_1063">
                          <div id="DIV_1064">
                             <b id="B_1065">5 seats</b> left at this price
                          </div>
                        </div><span id="SPAN_1066"></span>
                      </div>
                    </td>
                    <td id="TD_1067" rowspan="1">
                      <div id="DIV_1068">
                        <table id="TABLE_1069">
                          <tbody id="TBODY_1070">
                            <tr id="TR_1071">
                              <td id="TD_1072">
                                <div id="DIV_1073">
                                  <input type="radio" name="flightItineraryGroupId[0]_12" value="21" id="INPUT_1074" />
                                </div>
                              </td>
                              <td id="TD_1075">
                                <div id="DIV_1076">
                                   
                                  <label for="flightSelectGr_0_21" id="LABEL_1077">
                                    $599
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_1078">
                          <div id="DIV_1079">
                             <b id="B_1080">1 seat</b> left at this price
                          </div>
                        </div><span id="SPAN_1081"></span>
                      </div>
                    </td>
                    <td id="TD_1082" rowspan="1">
                      <div id="DIV_1083">
                        <table id="TABLE_1084">
                          <tbody id="TBODY_1085">
                            <tr id="TR_1086">
                              <td id="TD_1087">
                                <div id="DIV_1088">
                                  <input type="radio" name="flightItineraryGroupId[0]_12" value="20" id="INPUT_1089" />
                                </div>
                              </td>
                              <td id="TD_1090">
                                <div id="DIV_1091">
                                   
                                  <label for="flightSelectGr_0_20" id="LABEL_1092">
                                    $622
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_1093">
                          <div id="DIV_1094">
                             <b id="B_1095">1 seat</b> left at this price
                          </div>
                        </div><span id="SPAN_1096"></span>
                      </div>
                    </td>
                    <td id="TD_1097" rowspan="1">
                      <div id="DIV_1098">
                        <table id="TABLE_1099">
                          <tbody id="TBODY_1100">
                            <tr id="TR_1101">
                              <td id="TD_1102">
                                <div id="DIV_1103">
                                  <input type="radio" name="flightItineraryGroupId[0]_12" value="18" id="INPUT_1104" />
                                </div>
                              </td>
                              <td id="TD_1105">
                                <div id="DIV_1106">
                                   
                                  <label for="flightSelectGr_0_18" id="LABEL_1107">
                                    $699
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_1108">
                          <div id="DIV_1109">
                             <b id="B_1110">1 seat</b> left at this price
                          </div>
                        </div><span id="SPAN_1111"></span>
                      </div>
                    </td>
                    <td id="TD_1112" rowspan="1">
                      <div id="DIV_1113">
                        <table id="TABLE_1114">
                          <tbody id="TBODY_1115">
                            <tr id="TR_1116">
                              <td id="TD_1117">
                                <div id="DIV_1118">
                                  <input type="radio" name="flightItineraryGroupId[0]_12" value="17" id="INPUT_1119" />
                                </div>
                              </td>
                              <td id="TD_1120">
                                <div id="DIV_1121">
                                   
                                  <label for="flightSelectGr_0_17" id="LABEL_1122">
                                    $1,249
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div id="DIV_1123">
                        </div><span id="SPAN_1124"></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        <div id="DIV_2947">
              <div id="DIV_2948">
                <p id="P_2949">
                  No flights available
                </p>
              </div>
            </div>
        <div id="DIV_2950">
               <a href="#" id="A_2951">See All Departing Flight Results</a>
            </div>
      </div>
      <div id="DIV_2952">
            <div id="DIV_2953">
              <span id="SPAN_2954"></span>
            </div>
          </div>
    </div>

    );
  }
}

export default JetBlue;
