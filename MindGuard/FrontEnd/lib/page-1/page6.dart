import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';
import 'dart:ui';
import 'package:google_fonts/google_fonts.dart';
import 'package:myapp/utils.dart';

class Scene extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double baseWidth = 390;
    double fem = MediaQuery.of(context).size.width / baseWidth;
    double ffem = fem * 0.97;
    return Container(
      width: double.infinity,
      child: Container(
        // iphone147Kcf (74:12)
        width: double.infinity,
        decoration: BoxDecoration (
          borderRadius: BorderRadius.circular(10*fem),
          gradient: LinearGradient (
            begin: Alignment(0, -1),
            end: Alignment(0, 1),
            colors: <Color>[Color(0xff1f3d61), Color(0xff03152c)],
            stops: <double>[0.173, 1],
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Container(
              // autogroupcnmhi91 (4eevAiMdJmqUy9o8d2cNMh)
              padding: EdgeInsets.fromLTRB(32*fem, 11*fem, 15*fem, 11*fem),
              width: double.infinity,
              decoration: BoxDecoration (
                color: Color(0xff0a294f),
                borderRadius: BorderRadius.circular(10*fem),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Container(
                    // chevronleftPF9 (80:13)
                    margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 7.58*fem, 0.58*fem),
                    width: 47.42*fem,
                    height: 47.42*fem,
                    child: Image.asset(
                      'assets/page-1/images/chevron-left-Nhq.png',
                      fit: BoxFit.contain,
                    ),
                  ),
                  Container(
                    // quickscreening4s5 (81:15)
                    margin: EdgeInsets.fromLTRB(0*fem, 2*fem, 28*fem, 0*fem),
                    child: Text(
                      'Quick Screening',
                      textAlign: TextAlign.center,
                      style: SafeGoogleFont (
                        'Inter',
                        fontSize: 24*ffem,
                        fontWeight: FontWeight.w700,
                        height: 1.2125*ffem/fem,
                        fontStyle: FontStyle.italic,
                        color: Color(0xffffffff),
                      ),
                    ),
                  ),
                  Container(
                    // img20221225wa00182HUw (74:14)
                    width: 66*fem,
                    height: 66*fem,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(250*fem),
                      child: Image.asset(
                        'assets/page-1/images/img-20221225-wa0018-2.png',
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Container(
              // autogroupwx1dPH5 (4eevu7JekLywyHwhWywX1d)
              padding: EdgeInsets.fromLTRB(7*fem, 54*fem, 7*fem, 44*fem),
              width: double.infinity,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Container(
                    // autogroup2frvJQ3 (4eevMxXtcite4tQgFV2FRV)
                    margin: EdgeInsets.fromLTRB(21*fem, 0*fem, 22*fem, 115*fem),
                    padding: EdgeInsets.fromLTRB(28*fem, 61*fem, 52.5*fem, 21.39*fem),
                    width: double.infinity,
                    decoration: BoxDecoration (
                      color: Color(0xffffffff),
                      borderRadius: BorderRadius.circular(50*fem),
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Container(
                          // chatmessagesentBij (81:18)
                          margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 15.5*fem, 39.61*fem),
                          width: 71*fem,
                          height: 71*fem,
                          child: Image.asset(
                            'assets/page-1/images/chat-message-sent.png',
                            fit: BoxFit.contain,
                          ),
                        ),
                        Container(
                          // autogroupjmejUSw (4eevVNVCsZePsdYDQujmej)
                          margin: EdgeInsets.fromLTRB(0*fem, 21*fem, 0*fem, 0*fem),
                          width: 166*fem,
                          height: 89.61*fem,
                          child: Stack(
                            children: [
                              Positioned(
                                // questionnairePZu (81:19)
                                left: 0*fem,
                                top: 0*fem,
                                child: Align(
                                  child: SizedBox(
                                    width: 166*fem,
                                    height: 30*fem,
                                    child: Text(
                                      'Questionnaire',
                                      textAlign: TextAlign.center,
                                      style: SafeGoogleFont (
                                        'Inter',
                                        fontSize: 24*ffem,
                                        fontWeight: FontWeight.w700,
                                        height: 1.2125*ffem/fem,
                                        fontStyle: FontStyle.italic,
                                        color: Color(0xff000000),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                              Positioned(
                                // chevronleft2My (81:21)
                                left: 40.5*fem,
                                top: 29*fem,
                                child: Align(
                                  child: SizedBox(
                                    width: 60.61*fem,
                                    height: 60.61*fem,
                                    child: Image.asset(
                                      'assets/page-1/images/chevron-left-uLX.png',
                                      fit: BoxFit.contain,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    // autogroup4shmvy9 (4eeveNEDX867xDdT7g4shm)
                    margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 18*fem, 222*fem),
                    width: double.infinity,
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          // chevronleftd6s (81:24)
                          margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 15.89*fem, 0*fem),
                          width: 50.11*fem,
                          height: 50.11*fem,
                          child: Image.asset(
                            'assets/page-1/images/chevron-left-HBy.png',
                            fit: BoxFit.contain,
                          ),
                        ),
                        Container(
                          // advantagesofusingthisfunctiona (81:22)
                          margin: EdgeInsets.fromLTRB(0*fem, 11*fem, 0*fem, 0*fem),
                          constraints: BoxConstraints (
                            maxWidth: 292*fem,
                          ),
                          child: Text(
                            'Advantages of using this functionality',
                            textAlign: TextAlign.center,
                            style: SafeGoogleFont (
                              'Inter',
                              fontSize: 24*ffem,
                              fontWeight: FontWeight.w700,
                              height: 1.2125*ffem/fem,
                              fontStyle: FontStyle.italic,
                              color: Color(0xffffffff),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    // autogroupzqbuUmh (4eevmN2ZMfmTnu2rfNzQBu)
                    margin: EdgeInsets.fromLTRB(97*fem, 0*fem, 0*fem, 0*fem),
                    width: 219*fem,
                    height: 58*fem,
                    decoration: BoxDecoration (
                      border: Border.all(color: Color(0xfff5f5f5)),
                      color: Color(0xffffffff),
                    ),
                    child: Center(
                      child: Text(
                        'LEARN MORE',
                        textAlign: TextAlign.center,
                        style: SafeGoogleFont (
                          'Inter',
                          fontSize: 24*ffem,
                          fontWeight: FontWeight.w700,
                          height: 1.2125*ffem/fem,
                          fontStyle: FontStyle.italic,
                          color: Color(0xff000000),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
          );
  }
}