<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
      <head>
        <style>
					table.properties{
						border-collapse:collapse;
					}
					table.properties * {
						font-family: Tahoma;
						font-size: 10pt;
						color:black;
					}
					table.properties th {
						font-weight: bold;
						background-color: silver;
					}
					table.properties td, table.properties th {
						border: 1px solid black;
						padding: 2 2 2 2;
					}
					table.properties ul{
						margin-bottom: 0;
						margin-top: 0;
						margin-left: 20px;
						padding:0px;
					}
				</style>
      </head>
      <body>
        <h2>Properties</h2>
        <table class="properties">
          <thead>
            <tr>
              <th>
                Group
              </th>
              <th>
                Property
              </th>
              <th>
                Type
              </th>
							<th>
								Values
							</th>
							<th>
								Default
							</th>
							<th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="/Content/Object/Group">
							<xsl:sort select="Name" order="ascending"/>
							<xsl:apply-templates select="." />
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
</xsl:template>

  <xsl:template match="Group">
    <xsl:for-each select="Childs|Children">
			<xsl:apply-templates>
        <xsl:with-param name="group" select="../Name" />
      </xsl:apply-templates>
    </xsl:for-each>
  </xsl:template>

  <xsl:template match="Prop">
    <xsl:param name="group"/>
    <tr>
      <td>
				<xsl:if test="Metadata/Value[@name = 'FlagScope'] = 'Runtime'">
					<xsl:text>(Runtime)</xsl:text>
				</xsl:if>
				<xsl:if test="not (Metadata/Value[@name = 'FlagScope'] = 'Runtime')">
					<xsl:value-of select="$group"/>
				</xsl:if>
			</td>
      <td>
        <xsl:value-of select="Name"/>
      </td>
      <td>
        <xsl:value-of select="Type"/>
      </td>
      <td>
				<xsl:if test="Type = 'Combo'">
					<xsl:apply-templates select="Values" />
				</xsl:if>
				<xsl:if test="Type != 'Combo'">
					<xsl:text>-</xsl:text>
				</xsl:if>
			</td>
			<td>
				<xsl:if test="Default">
					<xsl:value-of select="Default"/>
				</xsl:if>
				<xsl:if test="not(Default)">
					<xsl:text>&#xa0;</xsl:text>
				</xsl:if>
			</td>
      <td>
				<xsl:if test="Description">
					<xsl:value-of select="Description" />
				</xsl:if>
				<xsl:if test="not(Description)">
					<xsl:text>&#xa0;</xsl:text>
				</xsl:if>
			</td>
    </tr>
  </xsl:template>

  <xsl:template match="Values">
    <ul>
      <xsl:for-each select="Value">
        <li>
          <xsl:value-of select="@desc"/>
        </li>
      </xsl:for-each>
    </ul>
  </xsl:template>

</xsl:stylesheet> 
