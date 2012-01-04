<?xml version='1.0'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxml="urn:schemas-microsoft-com:xslt"
	xmlns:gx="urn:shemas-artech-com:gx"
	exclude-result-prefixes="msxml gx"
	xmlns:gxca="urn:GXControlAdap">
  <xsl:output method="html"/>
  <xsl:template match="/" >
    <xsl:apply-templates select="/GxControl"/>
  </xsl:template>
  <xsl:template match="GxControl">
    <xsl:choose>
      <xsl:when test="@type = 'gxui.ThemeSelector'">
        <xsl:call-template name="RenderThemeSelector"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- ThemeSelector design render -->
  <!-- ///////////////////  Implement your render here  ///////////////////-->
  <xsl:template name="RenderThemeSelector">
    <span atomicselection="true">
      <!--<xsl:call-template name="AddStyleAttribute"/>-->
		<table style="width: 109px; height: 30px" cellspacing="1" cellpadding="1" width="110" border="1">
		    <tbody>
		        <tr>
		            <td>Theme:</td>
		            <td><select>
		            <option value="Theme1" selected="selected">Theme 1</option>
		            <option value="Theme2">Theme 2</option>
		            <option value="Theme3">Theme 3</option>
		            </select></td>
		        </tr>
		    </tbody>
		</table>
    </span>
  </xsl:template>


  <!-- Helpers Templates -->

  <xsl:template name="AddStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>width: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Width')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>height: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Height')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>border-style: solid;	border-width: 2px;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>
</xsl:stylesheet>
