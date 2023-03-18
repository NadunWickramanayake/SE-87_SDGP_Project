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
        // iphone1417hhV (86:61)
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
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              // autogroupzeafuHm (4eeprx2mmCc7dfz6VXZeAF)
              padding: EdgeInsets.fromLTRB(14*fem, 11*fem, 8*fem, 11*fem),
              width: double.infinity,
              decoration: BoxDecoration (
                color: Color(0xff0a294f),
                borderRadius: BorderRadius.circular(10*fem),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Container(
                    // symptomsofdepressionMfZ (86:67)
                    margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 7*fem, 0*fem),
                    child: Text(
                      'Symptoms of Depression',
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
                    // img20221225wa0018232b (86:66)
                    width: 66*fem,
                    height: 66*fem,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(250*fem),
                      child: Image.asset(
                        'assets/page-1/images/img-20221225-wa0018-2-aPV.png',
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Container(
              // autogroupr85rjw1 (4eeq47Nqnh3b8zepCSR85R)
              padding: EdgeInsets.fromLTRB(72*fem, 93*fem, 72*fem, 92*fem),
              width: double.infinity,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Container(
                    // ellipse9qUF (86:78)
                    margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 109*fem, 0*fem),
                    width: 137*fem,
                    height: 137*fem,
                    decoration: BoxDecoration (
                      borderRadius: BorderRadius.circular(68.5*fem),
                      color: Color(0xffd9d9d9),
                    ),
                  ),
                  SizedBox(
                    height: 47*fem,
                  ),
                  Container(
                    // ellipse10jJj (86:79)
                    margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 109*fem, 0*fem),
                    width: 137*fem,
                    height: 137*fem,
                    decoration: BoxDecoration (
                      borderRadius: BorderRadius.circular(68.5*fem),
                      color: Color(0xffd9d9d9),
                    ),
                  ),
                  SizedBox(
                    height: 47*fem,
                  ),
                  Container(
                    // ellipse11opP (86:80)
                    margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 109*fem, 0*fem),
                    width: 137*fem,
                    height: 137*fem,
                    decoration: BoxDecoration (
                      borderRadius: BorderRadius.circular(68.5*fem),
                      color: Color(0xffd9d9d9),
                    ),
                  ),
                ],
              ),
            ),
            Container(
              // rectangle17vPD (86:68)
              width: 401*fem,
              height: 66*fem,
              decoration: BoxDecoration (
                color: Color(0xffd9d9d9),
              ),
            ),
          ],
        ),
      ),
          );
  }
}